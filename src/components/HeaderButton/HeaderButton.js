import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderButton.css';

const HeaderButton = ({ children, state, className, onClick }) => {
  let classes = `${className} HeaderButton`;
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
    case 'none':
      classes += ' HeaderButton--none';
      break;
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
  state: PropTypes.oneOf(['selected', 'hovered', 'none']),
  onClick: PropTypes.func,
};

HeaderButton.defaultProps = {
  className: '',
  onClick() {},
};

export default HeaderButton;
