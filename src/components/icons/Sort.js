import React from 'react';
import PropTypes from 'prop-types';

const Sort = ({ state }) => {
  const classes = `Sort ${state === 'selected' ? 'Sort--selected' : ''} ${
    state === 'hovered' ? 'Sort--hovered' : ''
  }`;
  return (
    <svg className={classes} viewBox="0 0 20 20" version={1}>
      <path
        d="M15.362 2.947l3.385 4.394c.498.644.24 1.174-.582 1.174h-2.224v8.983c.003.398-.152.782-.431 1.064a1.47 1.47 0 0 1-1.054.438 1.49 1.49 0 0 1-1.485-1.502V8.515h-2.225c-.824 0-1.084-.524-.582-1.174l3.386-4.392c.497-.644 1.311-.649 1.812 0v-.002zm-8.91 14.104c-.5.649-1.314.644-1.812 0L1.255 12.66c-.5-.65-.242-1.174.582-1.174h2.224V2.502c-.001-.398.155-.78.433-1.062a1.484 1.484 0 0 1 2.537 1.063v8.982h2.225c.82 0 1.08.529.582 1.174l-3.386 4.392z"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  );
};

Sort.propTypes = {};

export default Sort;
