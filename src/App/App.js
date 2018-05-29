import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import getRelativeURL from '../utils/getRelativeURL';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import Popup from '../components/Popup';
import * as Icon from '../components/icons';
import * as View from '../components/views';
import { VIEWS } from '../constants';

const App = ({ open, onToggleBtnClick, view, toggleSettingsView, loading }) => {
  const toggleBtnClasses = `toggle-btn ${open ? '' : 'toggle-btn--close'}`;
  const CurView = loading ? View[VIEWS.LOADING] : View[view] || React.Fragment;
  return (
    <React.Fragment>
      <Header>
        <Popup>
          <Popup.Button>
            {({ toggle, open }) => (
              <HeaderButton onClick={toggle} state={open ? 'selected' : ''}>
                <Icon.Filter />
              </HeaderButton>
            )}
          </Popup.Button>
          <Popup.Content>OMG OMG OMGG OMG</Popup.Content>
        </Popup>
        <HeaderButton>
          <Icon.Sort />
        </HeaderButton>
        <HeaderButton
          onClick={toggleSettingsView}
          state={VIEWS.SETTINGS === view ? 'selected' : undefined}
        >
          <Icon.Settings />
        </HeaderButton>
        <HeaderButton state="none" />
        <HeaderButton
          open={open}
          className={toggleBtnClasses}
          onClick={onToggleBtnClick}
        >
          <Icon.Star />
        </HeaderButton>
      </Header>
      <CurView />
    </React.Fragment>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
