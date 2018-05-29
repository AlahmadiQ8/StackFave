import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderButton.css';

const HeaderButton = ({ children, state, className, onClick }) => {
  let classes = `${className} HeaderButton`;
  if (state) {
    classes += ` HeaderButton--${state}`;
  }
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { state })
  );
  return (
    <button className={classes} onClick={onClick}>
      {childrenWithProps}
    </button>
  );
};

HeaderButton.propTypes = {
  state: PropTypes.oneOf(['selected', 'hovered', 'none', 'loading', '']),
  onClick: PropTypes.func,
};

HeaderButton.defaultProps = {
  className: '',
  onClick() {},
};

export default HeaderButton;
