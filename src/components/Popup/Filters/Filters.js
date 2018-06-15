import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import getTags from '../../../utils/getTags';
import { Consumer } from '../../../context';
import './Filters.css';

const styles = {
  control: (base, { isFocused }) => {
    return {
      ...base,
      border: 'none',
      backgroundColor: 'white',
      borderBottom: `2px solid ${isFocused ? '#FFC07F' : '#FCE2C6'}`,
      borderRadius: '0',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#FFC07F',
      },
    };
  },
  valueContainer: base => ({
    ...base,
    paddingLeft: 0,
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: '#FFC07F',
  }),
  multiValueLabel: base => ({
    ...base,
    color: '#453525',
  }),
  multiValueRemove: (base, { isFocused }) => ({
    ...base,
    color: '#453525',
    '&:hover': {
      backgroundColor: '#F0A14F',
    },
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected
      ? '#FCE2C6'
      : isFocused
        ? '#FCE2C6'
        : 'transparent',
    '&:hover': {
      backgroundColor: '#FCE2C6',
    },
  }),
};

const Filters = () => (
  <Consumer>
    {({ favorites }) => {
      const options = getTags(favorites).map(tag => ({
        value: tag,
        label: tag,
      }));
      return (
        <React.Fragment>
          <h2 className="h2">Filters</h2>
          <h4 className="label">By tags</h4>
          <Select
            isMulti
            name="colors"
            options={options}
            classNamePrefix="select"
            styles={styles}
            components={{ DropdownIndicator: null }}
            isClearable={false}
            className="Filters__Select"
          />
        </React.Fragment>
      );
    }}
  </Consumer>
);

Filters.propTypes = {};

Filters.defaultProps = {};

export default Filters;
