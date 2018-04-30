import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Native as Store } from './utils/store';
import { DEFAULTS, STORE, VIEWS } from './constants';
import './index.css';

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
    console.log(store.get(STORE.TOKEN));
    this.state = {
      open: store.get(STORE.SHOW_SIDEBAR),
      view: store.get(STORE.TOKEN) ? VIEWS.DEFAULT : VIEWS.SETTINGS,
    };
  }

  toggleOpen = e => {
    e.preventDefault();
    this.setState(({ open }) => ({ open: !open }));
    toggleSideBar();
  };

  toggleSettingsView = view => {
    this.setState((prevState, props) => {
      if (prevState.view === VIEWS.SETTINGS) {
        return { view: VIEWS.DEFAULT };
      } else {
        return { view: VIEWS.SETTINGS };
      }
    });
  };

  componentDidUpdate() {
    store.set(STORE.SHOW_SIDEBAR, this.state.open);
  }

  render() {
    return (
      <App
        open={this.state.open}
        view={this.state.view}
        onToggleBtnClick={this.toggleOpen}
        toggleSettingsView={this.toggleSettingsView}
      />
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
