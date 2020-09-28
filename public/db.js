/*Web Version of HTML-DB*/
const htmlDB = {};
htmlDB.db = class {
  constructor(sudo_struct = []) {
    Object.defineProperty(this, "db", {
      value: new Map(sudo_struct),
      writable: true,
      configurable: true
    });
  }
  all() {
    return Array.from(this.db);
  }
  createTable(name) {
    this.db.set(name, new Map());
    return true;
  }
  deleteTable(name) {
    this.db.delete(name);
    return true;
  }
  getTable(name) {
    return this.db.get(name);
  }
  hasTable(name) {
    if (this.db.has(name)) {
      return true;
    }
    return false;
  }
  toJSON(data = this.db) {
    var ar = {};
    let keys = data.keys();
    for (const item of keys) {
      let ite = Object.fromEntries(this.db.get(item));
      ar[item] = ite;
    }
    return Array.from(Object.entries(ar));
  }
};