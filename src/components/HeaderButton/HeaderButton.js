import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderButton.css';

const HeaderButton = ({ children, state }) => {
  const classes = `HeaderButton ${
    state === 'selected' ? 'HeaderButton--selected' : ''
  } ${state === 'hovered' ? 'HeaderButton--hovered' : ''}`;
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { state })
  );
  return <button className={classes}>{childrenWithProps}</button>;
};

HeaderButton.propTypes = {
  state: PropTypes.oneOf(['selected', 'hovered']),
};

HeaderButton.defaultProps = {};

export default HeaderButton;
