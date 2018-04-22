import Native from './native';
import { STORE, DEFAULTS } from '../../constants';

describe('Native', () => {
  const localStorageMock = () => {
    const state = {};
    return {
      setItem(key, val) {
        state[key] = val;
      },
      getItem(key) {
        return state[key];
      },
    };
  };

  it('sets item and gets it', () => {
    const nativeStorage = new Native(localStorageMock());
    expect(() => nativeStorage.set('key1', { x: 3, y: 'str' })).not.toThrow();
    expect(nativeStorage.get('key1')).toEqual({ x: 3, y: 'str' });
  });

  it('setDefault sets default values when not set', () => {
    const nativeStorage = new Native(localStorageMock());
    nativeStorage.setDefault(STORE.WIDTH, DEFAULTS.WIDTH);
    expect(nativeStorage.get(STORE.WIDTH)).toEqual(DEFAULTS.WIDTH);
  });

  it('setDefault does not set default values when value is already set', () => {
    const nativeStorage = new Native(localStorageMock());
    nativeStorage.setDefault(STORE.WIDTH, DEFAULTS.WIDTH);
    expect(nativeStorage.get(STORE.WIDTH)).toEqual(DEFAULTS.WIDTH);
  });
});
