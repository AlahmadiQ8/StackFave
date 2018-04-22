export default class Store {
  constructor() {
    if (!this.get || !this.set) {
      throw new Error('Some methods not implemented');
    }
  }

  setDefault = (key, defaultVal) => {
    this.get(key, val => {
      this.set(key, val == null ? defaultVal : val);
    });
  };
}
