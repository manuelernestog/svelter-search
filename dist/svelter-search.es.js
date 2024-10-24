import h from "dexie";
class l {
  constructor(e = {}) {
    this.search_id = e.search_id || "default_search", this.update_interval = e.update_interval || 36e5, this.data_url = e.data_url || "", this.date_url = e.date_url || "", this.auto_update = e.auto_update ?? !1, this.incrementalUpdate = e.incrementalUpdate ?? !1, this.db = new h("svelter_search");
    const t = {};
    t[this.search_id] = "&id, updated_at, search_value, *searchWords", this.db.version(1).stores(t), this.searchTable = this.db.table(this.search_id), this.searchTable.hook("creating", (s, i) => {
      typeof i.search_value == "string" ? i.searchWords = this.getAllWords(i.search_value) : i.searchWords = [];
    }), this.searchTable.hook("updating", (s, i, c) => "search_value" in s ? typeof s.search_value == "string" ? { searchWords: this.getAllWords(s.search_value) } : { searchWords: [] } : s);
    const a = `svelter_search_${this.search_id}_last_update`, r = localStorage.getItem(a);
    this.last_update = r ? new Date(r) : /* @__PURE__ */ new Date(0);
  }
  getAllWords(e) {
    const a = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/\b\w+\b/g);
    if (a) {
      const r = new Set(a.map((s) => s.toLowerCase()));
      return Array.from(r);
    }
    return [];
  }
  async update(e) {
    const t = e || this.data_url;
    if (await this.isUpdateNeeded()) {
      this.incrementalUpdate || await this.clear();
      try {
        const r = await (await fetch(t)).json();
        await this.processData(r), this.last_update = /* @__PURE__ */ new Date(), localStorage.setItem(`svelter_search_${this.search_id}_last_update`, this.last_update.toISOString());
      } catch (a) {
        throw console.error("Error during update:", a), a;
      }
    }
  }
  async isUpdateNeeded() {
    return Date.now() - this.last_update.getTime() >= this.update_interval ? !0 : await this.isRemoteChanged();
  }
  async isRemoteChanged() {
    if (!this.date_url)
      return !1;
    try {
      const t = await (await fetch(this.date_url)).json();
      return new Date(t.updated_at) > this.last_update;
    } catch (e) {
      return console.error("Error fetching remote update date:", e), !0;
    }
  }
  async processData(e) {
    if (!Array.isArray(e))
      throw new Error("Data must be an array of items.");
    await this.db.transaction("rw", this.searchTable, async () => {
      for (const t of e)
        if (t.id)
          if (t.is_deleted)
            await this.searchTable.delete(t.id);
          else {
            const a = await this.searchTable.get(t.id);
            (!a || new Date(t.updated_at) > new Date(a.updated_at)) && await this.searchTable.put({
              id: t.id,
              updated_at: t.updated_at,
              search_value: t.search_value,
              data: t.data
            });
          }
    });
  }
  async clear() {
    await this.searchTable.clear(), localStorage.removeItem(`svelter_search_${this.search_id}_last_update`), console.log("Database purged for search_id:", this.search_id);
  }
  async search(e) {
    if (!e)
      return [];
    this.auto_update && await this.update();
    const a = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(/\b\w+\b/g);
    if (!a || a.length === 0)
      return [];
    try {
      return await this.searchTable.filter((s) => {
        const i = s.searchWords || [];
        return a.every(
          (c) => i.some((d) => d.includes(c))
        );
      }).toArray();
    } catch (r) {
      return console.error("Error searching data:", r), [];
    }
  }
}
export {
  l as default
};
