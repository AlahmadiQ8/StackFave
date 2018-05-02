import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ state }) => {
  let classes = 'Filter';
  if (state) {
    classes += ` Filter--${state}`;
  }
  return (
    <svg
      className={classes}
      viewBox="0 0 25 20"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M8 17.5c0-.828.71-1.5 1.6-1.5h4.8c.883 0 1.6.666 1.6 1.5 0 .828-.71 1.5-1.6 1.5H9.6c-.883 0-1.6-.666-1.6-1.5zm-3-7C5 9.672 5.743 9 6.663 9h11.674C19.255 9 20 9.666 20 10.5c0 .828-.743 1.5-1.663 1.5H6.663c-.442 0-.866-.157-1.178-.439A1.422 1.422 0 0 1 5 10.5zm-4-7C1 2.12 2.109 1 3.461 1h18.078C22.898 1 24 2.11 24 3.5 24 4.88 22.891 6 21.539 6H3.461a2.438 2.438 0 0 1-1.743-.731A2.51 2.51 0 0 1 1 3.5z"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  );
};

Filter.propTypes = {};

export default Filter;
