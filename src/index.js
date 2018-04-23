import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Native as Store } from './utils/store';
import { DEFAULTS, STORE } from './constants';
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
    store.setDefault(STORE[key], DEFAULTS[key]);
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
    this.state = {
      open: store.get(STORE.SHOW_SIDEBAR),
    };
  }

  toggleOpen = e => {
    e.preventDefault();
    this.setState(({ open }) => ({ open: !open }));
    toggleSideBar();
  };

  componentDidUpdate() {
    store.set(STORE.SHOW_SIDEBAR, this.state.open);
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.toggleOpen}
          className={`ext_toggle-btn ${
            !this.state.open ? 'ext_toggle-btn-hide' : ''
          }`}
        >
          {this.state.open ? '<' : '>'}
        </button>
        <App />
      </React.Fragment>
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
