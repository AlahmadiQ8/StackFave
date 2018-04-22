import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Native as Store } from './utils/store';
import { DEFAULTS, STORE } from './constants';
import './index.css';
import { exec } from 'child_process';

let $html;
let $body;
let $root;

ready(() => {
  $html = document.documentElement;
  $body = document.body;
  $html.classList.add('ext-html-show');
  $root = document.createElement('div');
  $root.setAttribute('id', 'root');
  $root.setAttribute('class', 'ext_sidebar');
  $body.appendChild($root);
  ReactDOM.render(<AppContainer />, document.getElementById('root'));
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
    Object.keys(STORE).forEach(key => {
      this.store.setDefault(STORE[key], DEFAULTS[key]);
    });
    this.state = {
      open: false,
    };
  }

  toggleOpen = e => {
    e.preventDefault();
    this.setState(({ open }) => ({ open: !open }));
    $root.classList.toggle('ext_sidebar-hide');
    $html.classList.toggle('ext-html-show');
    $html.classList.toggle('ext_html-hide');
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.toggleOpen}
          className={`ext_toggle-btn ${
            this.state.open ? 'ext_toggle-btn-hide' : ''
          }`}
        >
          {this.state.open ? '>' : '<'}
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
