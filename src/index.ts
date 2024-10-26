import Dexie, { type Table } from 'dexie';
import type { SvelterSearchOptions, SearchItem, RemoteDateResponse } from "./types";

class SvelterSearch {
  private search_id: string;
  private update_interval: number;
  private data_url: string;
  private date_url: string;
  private last_update: Date;
  private auto_update: boolean;
  private incrementalUpdate: boolean;
  private result_limit: number;
  private db: Dexie;
  private searchTable: Table<SearchItem, string>;

  constructor(options: SvelterSearchOptions = {}) {
    this.search_id = options.search_id || "default_search";
    this.update_interval = options.update_interval || 3600000; // 1 hour in milliseconds
    this.data_url = options.data_url || "";
    this.date_url = options.date_url || "";
    this.result_limit = options.result_limit || 50;
    this.auto_update = options.auto_update ?? false;
    this.incrementalUpdate = options.incrementalUpdate ?? false;

    const db_name = `svelter_search_${this.search_id}`;
    this.db = new Dexie(db_name);

    const schema: { [key: string]: string } = {};
    schema.items = "&id, updated_at, search_value, *searchWords";
    this.db.version(1).stores(schema);

    this.searchTable = this.db.table<SearchItem, string>('items');

    this.searchTable.hook("creating", (primKey: string, obj: SearchItem) => {
      if (typeof obj.search_value === "string") {
        obj.searchWords = this.getAllWords(obj.search_value);
      } else {
        obj.searchWords = [];
      }
    });

    this.searchTable.hook("updating", (mods: Partial<SearchItem>, primKey: string, obj: SearchItem) => {
      if ("search_value" in mods) {
        if (typeof mods.search_value === "string") {
          return { searchWords: this.getAllWords(mods.search_value) };
        } else {
          return { searchWords: [] };
        }
      }
      return mods;
    });

    const lastUpdateKey = `svelter_search_${this.search_id}_last_update`;
    const storedLastUpdate = localStorage.getItem(lastUpdateKey);
    this.last_update = storedLastUpdate ? new Date(storedLastUpdate) : new Date(0);
  }

  private getAllWords(text: string): string[] {
    const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const words = normalizedText.match(/\b\w+\b/g);

    if (words) {
      const wordSet = new Set(words.map((word) => word.toLowerCase()));
      return Array.from(wordSet);
    }
    return [];
  }

  public async update(data_url = this.data_url): Promise<void> {
    if (!(await this.isUpdateNeeded())) return;

    if (!this.incrementalUpdate) await this.clear();

    try {
      const response = await fetch(data_url);
      const data: SearchItem[] = await response.json();
      await this.processData(data);
      this.last_update = new Date();

      localStorage.setItem(`svelter_search_${this.search_id}_last_update`, this.last_update.toISOString());
    } catch (error) {
      console.error("Error during update:", error);
      throw error;
    }
  }

  private async isUpdateNeeded(): Promise<boolean> {
    const timeSinceLastUpdate = Date.now() - this.last_update.getTime();

    if (timeSinceLastUpdate < this.update_interval) return false;
    
    return this.date_url === "" || await this.isRemoteChanged();
  }

  private async isRemoteChanged(): Promise<boolean> {
    try {
      const response = await fetch(this.date_url);
      const data: RemoteDateResponse = await response.json();
      return new Date(data.updated_at) > this.last_update;
    } catch (error) {
      console.error("Error fetching remote update date:", error);
      return true;
    }
  }

  private async processData(data: SearchItem[]): Promise<void> {
    if (!Array.isArray(data)) throw new Error("Data must be an array of items.");

    await this.db.transaction("rw", this.searchTable, async () => {
      for (const item of data) {
        if (!item.id) continue;

        if (item.is_deleted) {
          await this.searchTable.delete(item.id);
        } else {
          const existingItem = await this.searchTable.get(item.id);
          if (!existingItem || new Date(item.updated_at) > new Date(existingItem.updated_at)) {
            await this.searchTable.put({
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

  public async clear(): Promise<void> {
    await this.searchTable.clear();
    localStorage.removeItem(`svelter_search_${this.search_id}_last_update`);
    console.log("Database purged for search_id:", this.search_id);
  }

  public async search(text: string): Promise<SearchItem[]> {
    if (!text) return [];

    if (this.auto_update) await this.update();

    const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const searchWords = normalizedText.toLowerCase().match(/\b\w+\b/g);

    if (!searchWords || searchWords.length === 0) return [];

    try {
      const results = await this.searchTable
        .filter((item) => {
          const itemWords = item.searchWords || [];
          return searchWords!.every((searchWord) =>
            itemWords.some((itemWord) => itemWord.includes(searchWord))
          );
        })
        .limit(this.result_limit)
        .toArray();
      return results;
    } catch (error) {
      console.error("Error searching data:", error);
      return [];
    }
  }
}

export default SvelterSearch;
