import React from 'react';
import css from './contactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => (
  <div className={css.ListItem}>
    {name} : {number}
    <button className={css.DeleteButton} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </div>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
