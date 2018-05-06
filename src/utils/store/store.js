export default class Store {
  constructor() {
    if (!this.get || !this.set || !this.removeItem) {
      throw new Error('Some methods not implemented');
    }
  }

  setDefault = (key, defaultVal) => {
    this.get(key, val => {
      this.set(key, val == null ? defaultVal : val);
    });
  };
}
