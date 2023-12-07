import React, { useState } from 'react';
import css from './contactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={css.Form}>
      <label htmlFor="inputName">Name</label>
      <input
        type="text"
        name="name"
        className={css.Input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="inputName"
        value={name}
        onChange={handleChange}
      ></input>
      <label htmlFor="inputNumber">Number</label>
      <input
        type="tel"
        name="number"
        className={css.Input}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="inputNumber"
        value={number}
        onChange={handleChange}
      />
      <button type="submit">Add contacts</button>
    </form>
  );
};
