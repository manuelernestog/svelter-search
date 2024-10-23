// src/svelterSearch.js
import Dexie from 'dexie';

class svelterSearch {
    constructor(options) {
        // Initialize properties with defaults
        this.db_id = options.db_id || 'svelterSearchDB';
        this.update_interval = options.update_interval || 3600000; // 1 hour in milliseconds
        this.updated_method = options.updated_method || 'INCREMENTAL'; // 'INCREMENTAL' or 'TOTAL'
        this.data_url = options.data_url || '';
        this.date_url = options.date_url || '';
        this.last_update = null;

        // Initialize IndexedDB using Dexie
        this.db = new Dexie(this.db_id);

        // Define database schema with multi-entry index for searchWords
        this.db.version(1).stores({
            items: '&id, updated_at, search_value, *searchWords'
        });

        // Add hooks to process search_value and generate searchWords
        this.db.items.hook('creating', (primKey, obj) => {
            if (typeof obj.search_value === 'string') {
                obj.searchWords = this.getAllWords(obj.search_value);
            } else {
                obj.searchWords = [];
            }
        });

        this.db.items.hook('updating', (mods, primKey, obj) => {
            if (mods.hasOwnProperty('search_value')) {
                if (typeof mods.search_value === 'string') {
                    // Re-index searchWords
                    return { searchWords: this.getAllWords(mods.search_value) };
                } else {
                    // Remove searchWords index
                    return { searchWords: [] };
                }
            }
        });

        // Load last_update from localStorage
        const lastUpdateKey = `${this.db_id}_last_update`;
        const storedLastUpdate = localStorage.getItem(lastUpdateKey);
        if (storedLastUpdate) {
            this.last_update = new Date(storedLastUpdate);
        } else {
            this.last_update = new Date(0); // If no stored date, set to epoch
        }
    }

    // Helper method to extract words from text
    getAllWords(text) {
        const words = text.match(/\b\w+\b/g);
        if (words) {
            // Convert to lowercase and remove duplicates
            const wordSet = new Set(words.map(word => word.toLowerCase()));
            return Array.from(wordSet);
        }
        return [];
    }

    // Method to check if an update is needed based on update_interval
    isUpdateNeeded() {
        const now = Date.now();
        const timeSinceLastUpdate = now - this.last_update.getTime();
        return timeSinceLastUpdate >= this.update_interval;
    }

    // Public method to manually trigger an update if needed
    async updateDataIfNeeded() {
        if (this.isUpdateNeeded()) {
            await this.updateData();
        }
    }

    async updateData() {
        if (this.updated_method === 'INCREMENTAL') {
            await this.pullIncremental();
        } else if (this.updated_method === 'TOTAL') {
            await this.pullTotal();
        } else {
            throw new Error(`Invalid updated_method: ${this.updated_method}`);
        }
    }

    async pull(data_url = this.data_url) {
        if (!data_url) {
            throw new Error('Data URL is not specified.');
        }

        try {
            const response = await fetch(data_url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();

            // Process data
            await this.processData(data);

            // Update last_update
            this.last_update = new Date();
            localStorage.setItem(`${this.db_id}_last_update`, this.last_update.toISOString());
        } catch (error) {
            console.error('Error in pull method:', error);
            throw error;
        }
    }

    async pullIncremental() {
        const lastUpdateParam = encodeURIComponent(this.last_update.toISOString());
        const incrementalUrl = `${this.data_url}?since=${lastUpdateParam}`;
        await this.pull(incrementalUrl);
    }

    async pullTotal() {
        if (!this.date_url) {
            console.warn('Date URL is not specified. Proceeding to pull all data.');
            await this.pull();
            return;
        }

        try {
            const response = await fetch(this.date_url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const { updated_at } = await response.json();
            const updatedAtDate = new Date(updated_at);

            if (updatedAtDate > this.last_update) {
                // Data has been updated, pull the data
                await this.pull();
            } else {
                // No update needed
                console.log('Data is up to date. No need to pull.');
            }
        } catch (error) {
            console.error('Error in pullTotal method:', error);
            throw error;
        }
    }

    async processData(data) {
        if (!Array.isArray(data)) {
            throw new Error('Data must be an array of items.');
        }

        // Use a transaction for bulk operations
        await this.db.transaction('rw', this.db.items, async () => {
            for (const item of data) {
                if (!item.id) {
                    console.warn('Item without id:', item);
                    continue;
                }

                const existingItem = await this.db.items.get(item.id);
                if (!existingItem || new Date(item.updated_at) > new Date(existingItem.updated_at)) {
                    // Insert or update item
                    await this.db.items.put({
                        id: item.id,
                        updated_at: item.updated_at,
                        search_value: item.search_value,
                        data: item.data
                        // searchWords will be automatically handled by hooks
                    });
                }
            }
        });
    }

    async purge() {
        await this.db.items.clear();
        localStorage.removeItem(`${this.db_id}_last_update`);
        console.log('Database purged.');
    }

    async search(text) {
        if (!text) {
            return [];
        }

        // Before searching, check if an update is needed
        await this.updateDataIfNeeded();

        // Extract words from the search text
        const searchWords = this.getAllWords(text.toLowerCase());

        if (searchWords.length === 0) {
            return [];
        }

        try {
            // Perform a query using the multi-entry index
            let collection = this.db.items.where('searchWords').anyOf(searchWords);

            // Optionally, you can filter further to match all words
            collection = collection.filter(item => {
                const itemWords = item.searchWords || [];
                return searchWords.every(word => itemWords.includes(word));
            });

            const results = await collection.toArray();
            return results;
        } catch (error) {
            console.error('Error during search:', error);
            return [];
        }
    }

    // Optional: method to manually trigger an update
    async update() {
        await this.updateData();
    }
}

export default svelterSearch;
