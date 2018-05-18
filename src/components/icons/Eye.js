import React from 'react';
import PropTypes from 'prop-types';

const Eye = ({ state, style }) => {
  const classes = 'Eye';
  return (
    <svg className={classes} viewBox="0 0 9 6" version={1} style={style}>
      <path
        d="M4.249.013C2.625.013 1.153.9.066 2.343a.336.336 0 0 0 0 .402C1.153 4.19 2.626 5.078 4.25 5.078c1.623 0 3.096-.888 4.182-2.331a.336.336 0 0 0 0-.402C7.345.901 5.872.013 4.249.013zm.116 4.316A1.788 1.788 0 0 1 4.132.762a1.788 1.788 0 0 1 1.9 1.9 1.797 1.797 0 0 1-1.667 1.667zm-.054-.824A.96.96 0 0 1 3.29 2.483a.966.966 0 0 1 .899-.899.96.96 0 0 1 1.022 1.022.966.966 0 0 1-.899.899z"
        fill="#9C9C9C"
        fillRule="nonzero"
        strokeWidth=".5px"
      />
    </svg>
  );
};

Eye.propTypes = {};

export default Eye;
