import Dexie from "dexie";

class SvelterSearch {
  constructor(options) {
    this.search_id = options.search_id || "default_search";
    this.update_interval = options.update_interval || 3600000; // 1 hour in milliseconds
    this.data_url = options.data_url || "";
    this.date_url = options.date_url || "";
    this.last_update = null;
    this.auto_update = options.auto_update !== undefined ? options.auto_update : false;
    this.incrementalUpdate = options.incrementalUpdate !== undefined ? options.incrementalUpdate : false;

    this.db = new Dexie("svelter_search");

    const schema = {};
    schema[this.search_id] = "&id, updated_at, search_value, *searchWords";
    this.db.version(1).stores(schema);

    this.db[this.search_id].hook("creating", (primKey, obj) => {
      if (typeof obj.search_value === "string") {
        obj.searchWords = this.getAllWords(obj.search_value);
      } else {
        obj.searchWords = [];
      }
    });

    this.db[this.search_id].hook("updating", (mods, primKey, obj) => {
      if (mods.hasOwnProperty("search_value")) {
        if (typeof mods.search_value === "string") {
          return { searchWords: this.getAllWords(mods.search_value) };
        } else {
          return { searchWords: [] };
        }
      }
    });

    const lastUpdateKey = `svelter_search_${this.search_id}_last_update`;
    const storedLastUpdate = localStorage.getItem(lastUpdateKey);
    if (storedLastUpdate) {
      this.last_update = new Date(storedLastUpdate);
    } else {
      this.last_update = new Date(0);
    }
  }

  getAllWords(text) {
    const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const words = normalizedText.match(/\b\w+\b/g);

    if (words) {
      const wordSet = new Set(words.map((word) => word.toLowerCase()));
      return Array.from(wordSet);
    }
    return [];
  }

  async update(data_url = this.data_url) {
    console.log(await this.isUpdateNeeded());
    if (!(await this.isUpdateNeeded())) return;

    if (!this.incrementalUpdate) await this.clear();

    try {
      const response = await fetch(data_url);
      const data = await response.json();
      await this.processData(data);
      this.last_update = new Date();
      localStorage.setItem(`svelter_search_${this.search_id}_last_update`, this.last_update.toISOString());
    } catch (error) {
      console.error("Error during update:", error);
      throw error;
    }
  }

  async isUpdateNeeded() {
    const now = Date.now();
    const timeSinceLastUpdate = now - this.last_update.getTime();
    if (timeSinceLastUpdate >= this.update_interval) return true;

    return await this.isRemoteChanged();
  }

  async isRemoteChanged() {
    if (!this.date_url) return false;

    try {
      const response = await fetch(this.date_url);
      const { updated_at } = await response.json();
      const updatedAtDate = new Date(updated_at);
      return updatedAtDate > this.last_update;
    } catch (error) {
      console.error("Error fetching remote update date:", error);
      return true;
    }
  }

  async processData(data) {
    if (!Array.isArray(data)) throw new Error("Data must be an array of items.");

    await this.db.transaction("rw", this.db[this.search_id], async () => {
      for (const item of data) {
        if (!item.id) continue;

        if (item.is_deleted) {
          await this.db[this.search_id].delete(item.id);
        } else {
          const existingItem = await this.db[this.search_id].get(item.id);
          if (!existingItem || new Date(item.updated_at) > new Date(existingItem.updated_at)) {
            await this.db[this.search_id].put({
              id: item.id,
              updated_at: item.updated_at,
              search_value: item.search_value,
              data: item.data,
            });
          }
        }
      }
    });
  }

  async clear() {
    await this.db[this.search_id].clear();
    localStorage.removeItem(`svelter_search_${this.search_id}_last_update`);
    console.log("Database purged for search_id:", this.search_id);
  }

  async search(text) {
    if (!text) return [];
  
    if (this.auto_update) await this.update();
  
    const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const searchWords = normalizedText.toLowerCase().match(/\b\w+\b/g);
  
    if (!searchWords || searchWords.length === 0) return [];
  
    try {
      const results = await this.db[this.search_id]
        .filter((item) => {
          const itemWords = item.searchWords || [];
            return searchWords.every((searchWord) =>
            itemWords.some((itemWord) => itemWord.includes(searchWord))
          );
        })
        .toArray();
      return results;
    } catch (error) {
      console.error("Error searching data :", error);
      return [];
    }
  }
}

export default SvelterSearch;
