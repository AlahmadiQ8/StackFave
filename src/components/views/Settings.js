import React from 'react';
import { Consumer } from '../../context';

const Settings = () => {
  return (
    <Consumer>
      {({ token, error, login, removeToken }) => (
        <div className="View View__Settings">
          <h1 className="View__header">Settings</h1>
          {!token ? (
            <React.Fragment>
              <p className="View_p">
                You need to login with your stackoverflow account first. Access
                token will only be stored at local storage.
              </p>
              <button
                type="button"
                className="View__btn"
                onClick={() => {
                  login();
                }}
              >
                Login
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="View_p">You are already logged in.</p>
              <button type="button" className="View__btn" onClick={removeToken}>
                Remove token from storage
              </button>
            </React.Fragment>
          )}
          {error && <p className="View__error">{error}</p>}
        </div>
      )}
    </Consumer>
  );
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
