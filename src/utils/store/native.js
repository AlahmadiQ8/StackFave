import Store from './store';

function parse(val) {
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
}

export default class Native extends Store {
  constructor(storage = localStorage) {
    super();
    this.storage = storage;
  }

  set(key, val) {
    try {
      this.storage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.error('Cannot save its settings', e);
    }
  }

  get(key, cp) {
    const val = parse(this.storage.getItem(key));
    if (cp) {
      cp(val);
    }
    return val;
  }
}
