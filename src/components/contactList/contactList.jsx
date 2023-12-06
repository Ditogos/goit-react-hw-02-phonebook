import React from 'react';
import css from './contact.module.css';
import PropTypes from 'prop-types';

import { ContactListItem } from 'components/contactListItem/contactListItem';

const ContactList = ({ filtredContacts, onDeleteContact }) => (
  <div className={css.List}>
    {filtredContacts.map(contacts => (
      <ContactListItem
        key={contacts.id}
        id={contacts.id}
        name={contacts.name}
        number={contacts.number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </div>
);

ContactList.propTypes = {
  filtredContacts: PropTypes.array.isRequired,
};

export default ContactList;
