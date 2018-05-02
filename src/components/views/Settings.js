import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../index';

const Settings = ({}) => {
  let inputRef = null;
  return (
    <Consumer>
      {({ token, setToken }) => (
        <div className="View View__Settings">
          <h1 className="View__header">Settings</h1>
          <label className="View__label" htmlFor="token">
            Access Token
          </label>
          <input
            ref={node => {
              inputRef = node;
            }}
            className="View__input"
            type="text"
            id="token"
            placeholder="Paste your access token"
            defaultValue={token}
          />
          <button
            type="button"
            className="View__btn"
            type="submit"
            onClick={() => {
              setToken(inputRef.value);
            }}
          >
            Save
          </button>
        </div>
      )}
    </Consumer>
  );
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
