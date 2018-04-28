import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderButton.css';

const HeaderButton = ({ children, state }) => {
  let classes = 'HeaderButton';
  switch (state) {
    case 'selected':
      classes += ' HeaderButton--selected';
      break;
    case 'hovered':
      classes += ' HeaderButton--hovered';
      break;
    case 'loading':
      classes += ' HeaderButton--loading';
      break;
  }
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
