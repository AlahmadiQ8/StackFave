import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import getRelativeURL from '../utils/getRelativeURL';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { Filter, Sort, Settings, Star } from '../components/icons';
import * as Icon from '../components/icons';
import * as View from '../components/views';
import { VIEWS } from '../constants';

const App = ({ open, onToggleBtnClick, view, toggleSettingsView }) => {
  const toggleBtnClasses = `toggle-btn ${open ? '' : 'toggle-btn--close'}`;
  const CurView = View[view] || React.Fragment;
  return (
    <React.Fragment>
      <Header>
        <HeaderButton>
          <Icon.Filter />
        </HeaderButton>
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
