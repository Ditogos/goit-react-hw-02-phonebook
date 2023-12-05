import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filterContactList/filterContactList';
import { ContactList } from './contactList/contactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = (name, number) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFiltredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filtredContacts = this.getFiltredContacts();

    return (
      <div className={css.Wrapper}>
        <h1 className={css.Header}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          filtredContacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
