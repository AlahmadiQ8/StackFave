import React, { Component } from 'react';
import './Container.css';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div
        role="main"
        style={{
          padding: '3em',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #ededed',
          // height: '400px',
          alignItems: 'stretch',
        }}
        className="Container"
      >
        {story()}
      </div>
    );
  }
}
