import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { exec } from 'child_process';

let $html;
let $body;
let $root;

ready(() => {
  $html = document.documentElement;
  $body = document.body;
  $html.classList.add('ext-html-margin');
  $root = document.createElement('div');
  $root.setAttribute('id', 'root');
  $root.setAttribute('class', 'ext_sidebar');
  $body.appendChild($root);
  ReactDOM.render(<AppContainer />, document.getElementById('root'));
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleOpen = e => {
    e.preventDefault();
    this.setState(({ open }) => ({ open: !open }));
    $root.classList.toggle('ext_sidebar-hide');
    $html.classList.toggle('ext-html-margin');
    $html.classList.toggle('ext_html-full');
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.toggleOpen}
          className={`ext_toggle ext_toggle-sidebar-show ${
            this.state.open ? 'ext_toggle-sidebar-hide' : ''
          }`}
        >
          OMG
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
