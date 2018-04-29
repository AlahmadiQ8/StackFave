import React, { Component } from 'react';
import './App.css';
import getRelativeURL from '../utils/getRelativeURL';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { Filter, Sort, Settings, Star } from '../components/icons';

const App = ({ open, onToggleBtnClick }) => {
  const toggleBtnClasses = `toggle-btn ${open ? '' : 'toggle-btn--close'}`;
  return (
    <Header>
      <HeaderButton>
        <Filter />
      </HeaderButton>
      <HeaderButton>
        <Sort />
      </HeaderButton>
      <HeaderButton>
        <Settings />
      </HeaderButton>
      <HeaderButton state="none" />
      <HeaderButton
        open={open}
        className={toggleBtnClasses}
        onClick={onToggleBtnClick}
      >
        <Star />
      </HeaderButton>
    </Header>
  );
};

export default App;
