import Store from './store';

describe('Store', () => {
  it('throws when instantiated', () => {
    expect(() => new Store()).toThrow();
  });
  it('does not throw when a class extends it and implements all its methods', () => {
    class Test extends Store {
      set() {}
      get() {}
    }
    expect(() => new Test()).not.toThrow();
  });
  it('throws when a class extends it and does not implements all its methods', () => {
    class Test extends Store {
      set() {}
    }
    expect(() => new Test()).toThrow();
  });
});
