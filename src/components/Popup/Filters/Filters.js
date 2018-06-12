import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './Filters.css';

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const styles = {
  control: (base, state) => {
    console.log(state);
    const { isFocused } = state;
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
};

const Filters = () => (
  <React.Fragment>
    <h2 className="h2">Filters</h2>
    <h4 className="label">By tags</h4>
    <Select
      defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={colourOptions}
      classNamePrefix="select"
      styles={styles}
      components={{ DropdownIndicator: null }}
      isClearable={false}
      className="Filters__Select"
    />
  </React.Fragment>
);

Filters.propTypes = {};

Filters.defaultProps = {};

export default Filters;
