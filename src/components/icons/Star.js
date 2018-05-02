import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ state }) => {
  let classes = 'Star';
  if (state) {
    classes += ` Star--${state}`;
  }
  return (
    <svg className={classes} viewBox="0 0 33 31" version={1}>
      <path
        transform="translate(-8 -8)"
        fillRule="evenodd"
        d="M25 33L15 38 17 27 9 19 20 18 25 8 29 18 40 19 32 27 34 38z"
      />
    </svg>
  );
};

Star.propTypes = {};

export default Star;
