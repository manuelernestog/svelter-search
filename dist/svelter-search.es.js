import h from "dexie";
class o {
  constructor(e = {}) {
    this.search_id = e.search_id || "default_search", this.update_interval = e.update_interval || 36e5, this.data_url = e.data_url || "", this.date_url = e.date_url || "", this.result_limit = e.result_limit || 50, this.auto_update = e.auto_update ?? !1, this.incrementalUpdate = e.incrementalUpdate ?? !1;
    const t = `svelter_search_${this.search_id}`;
    this.db = new h(t);
    const a = {};
    a.items = "&id, updated_at, search_value, *searchWords", this.db.version(1).stores(a), this.searchTable = this.db.table("items"), this.searchTable.hook("creating", (r, s) => {
      typeof s.search_value == "string" ? s.searchWords = this.getAllWords(s.search_value) : s.searchWords = [];
    }), this.searchTable.hook("updating", (r, s, d) => "search_value" in r ? typeof r.search_value == "string" ? { searchWords: this.getAllWords(r.search_value) } : { searchWords: [] } : r);
    const i = `svelter_search_${this.search_id}_last_update`, c = localStorage.getItem(i);
    this.last_update = c ? new Date(c) : /* @__PURE__ */ new Date(0);
  }
  getAllWords(e) {
    const a = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/\b\w+\b/g);
    if (a) {
      const i = new Set(a.map((c) => c.toLowerCase()));
      return Array.from(i);
    }
    return [];
  }
  async update(e = this.data_url) {
    if (await this.isUpdateNeeded()) {
      this.incrementalUpdate || await this.clear();
      try {
        const a = await (await fetch(e)).json();
        await this.processData(a), this.last_update = /* @__PURE__ */ new Date(), localStorage.setItem(`svelter_search_${this.search_id}_last_update`, this.last_update.toISOString());
      } catch (t) {
        throw console.error("Error during update:", t), t;
      }
    }
  }
  async isUpdateNeeded() {
    return Date.now() - this.last_update.getTime() < this.update_interval ? !1 : this.date_url === "" || await this.isRemoteChanged();
  }
  async isRemoteChanged() {
    try {
      const t = await (await fetch(this.date_url)).json();
      return new Date(t.updated_at) > this.last_update;
    } catch (e) {
      return console.error("Error fetching remote update date:", e), !0;
    }
  }
  async processData(e) {
    if (!Array.isArray(e)) throw new Error("Data must be an array of items.");
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
    if (!e) return [];
    this.auto_update && await this.update();
    const a = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(/\b\w+\b/g);
    if (!a || a.length === 0) return [];
    try {
      return await this.searchTable.filter((c) => {
        const r = c.searchWords || [];
        return a.every(
          (s) => r.some((d) => d.includes(s))
        );
      }).limit(this.result_limit).toArray();
    } catch (i) {
      return console.error("Error searching data:", i), [];
    }
  }
}
export {
  o as default
};
