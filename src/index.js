/*global chrome*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Native as Store } from './utils/store';
import { DEFAULTS, STORE, VIEWS } from './constants';
import Api from './utils/api';
import getTags from './utils/getTags';
import './index.css';

import { Provider } from './context';

let $html;
let $body;
let $root;
const store = new Store();

ready(() => {
  $html = document.documentElement;
  $body = document.body;
  $root = document.createElement('div');
  $root.setAttribute('id', 'root');
  $root.setAttribute('class', 'ext_sidebar');
  $body.appendChild($root);

  Object.keys(STORE).forEach(key => {
    if (DEFAULTS[key]) {
      store.setDefault(STORE[key], DEFAULTS[key]);
    }
  });
  $html.classList.add('ext-html-show');
  if (store.get(STORE.SHOW_SIDEBAR)) {
    showSideBar();
  } else {
    hideSideBar();
  }

  ReactDOM.render(<AppContainer />, document.getElementById('root'));
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
    let token;

    // TODO: remove this before deploying extension
    if (process.env.NODE_ENV === 'production') {
      token = store.get(STORE.TOKEN);
    } else {
      token = 'egtz3MtlZSZMZ4RKP9FRgg))';
      store.set(STORE.TOKEN, token);
    }

    this.state = {
      open: store.get(STORE.SHOW_SIDEBAR),
      view: token ? VIEWS.DEFAULT : VIEWS.SETTINGS,
      token: token,
      error: '',
      loading: false,
      favorites: store.get(STORE.FAVORITES),
      filters: store.get(STORE.FILTERS),
      tags: store.get(STORE.FILTERS_OPTIONS),
    };

    if (token) {
      this.api = new Api(token);
    }

    this.login = this.login.bind(this);
  }

  toggleOpen = e => {
    e.preventDefault();
    this.setState(({ open }) => ({ open: !open }));
    toggleSideBar();
  };

  toggleSettingsView = view => {
    if (this.state.token) {
      this.setState((prevState, props) => {
        if (prevState.view === VIEWS.SETTINGS) {
          return { view: VIEWS.DEFAULT };
        } else {
          return { view: VIEWS.SETTINGS };
        }
      });
    }
  };

  async login() {
    this.setState({ loading: true });

    chrome.runtime.sendMessage({ type: 'AUTH' }, ({ token, error }) => {
      console.log(`Action 'AUTH' success`);
      if (token) {
        this.api = new Api(token);
        this.setState({ token, view: VIEWS.DEFAULT });
      } else {
        this.setState({ error });
      }
    });
  }

  removeToken = () => {
    chrome.runtime.sendMessage(
      {
        type: 'REMOVE_TOKEN',
        payload: { token: this.state.token },
      },
      ({ error }) => {
        if (!error) {
          console.log(`Action 'REMOVE_TOKEN' success`);
          this.setState({ token: '' });
        } else {
          this.setState({ error });
        }
      }
    );
  };

  setFilters = filters => {
    this.setState(
      prevState => {
        const items = store.get(STORE.FAVORITES);
        return {
          filters,
          favorites: filters.length
            ? this.filterFavorites(items, filters)
            : items,
        };
      },
      () => {
        store.set(STORE.FILTERS, filters);
      }
    );
  };

  filterFavorites = (items, filters) => {
    return items.filter(({ tags = [] }) =>
      tags.some(tag => filters.includes(tag))
    );
  };

  async componentDidMount() {
    const { token } = this.state;
    if (token) {
      this.setState({ loading: true });
      const items = await this.api.getFavorites();
      const filters = this.state.filters;
      const tags = getTags(items);
      this.setState({
        favorites: filters.length
          ? this.filterFavorites(items, filters)
          : items,
        loading: false,
        tags,
      });
      store.set(STORE.FAVORITES, items);
      store.set(STORE.FILTERS_OPTIONS, tags);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open) {
      store.set(STORE.SHOW_SIDEBAR, this.state.open);
    }

    if (prevState.token !== this.state.token) {
      // if new token set
      if (!prevState.token && this.state.token) {
        store.set(STORE.TOKEN, this.state.token);
        const favorites = await this.api.getFavorites();
        store.set(STORE.FAVORITES, favorites);
        this.setState({ favorites, loading: false });
      }

      // if token removed
      if (prevState.token && !this.state.token) {
        store.removeItem(STORE.TOKEN);
      }
    }
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          login: this.login,
          removeToken: this.removeToken,
          setFilters: this.setFilters,
        }}
      >
        <App
          open={this.state.open}
          view={this.state.view}
          onToggleBtnClick={this.toggleOpen}
          toggleSettingsView={this.toggleSettingsView}
          loading={this.state.loading}
          hasFilters={this.state.filters.length > 0}
        />
      </Provider>
    );
  }
}

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function showSideBar() {
  $root.classList.remove('ext_sidebar-hide');
  $html.classList.add('ext-html-show');
  $html.classList.remove('ext_html-hide');
}
function hideSideBar() {
  $root.classList.add('ext_sidebar-hide');
  $html.classList.remove('ext-html-show');
  $html.classList.add('ext_html-hide');
}
function toggleSideBar() {
  $root.classList.toggle('ext_sidebar-hide');
  $html.classList.toggle('ext-html-show');
  $html.classList.toggle('ext_html-hide');
}
