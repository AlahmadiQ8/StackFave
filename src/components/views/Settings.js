import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({}) => (
  <div className="View View__Settings">
    <h1 className="View__header">Settings</h1>
    <label className="View__label" htmlFor="token">
      Access Token
    </label>
    <input
      className="View__input"
      type="text"
      id="token"
      placeholder="Paste your access token"
    />
    <button
      type="button"
      className="btn btn-orange btn-sm View__btn"
      type="submit"
    >
      Save
    </button>
  </div>
);

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
