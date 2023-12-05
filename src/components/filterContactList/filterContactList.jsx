import React from 'react';
import css from './filterContactList.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className={css.FiterArea}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
