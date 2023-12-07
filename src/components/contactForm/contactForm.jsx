import React, { Component } from 'react';
import css from './contactForm.module.css';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.Form}>
        <label htmlFor="inputName">Name</label>
        <input
          type="text"
          name="name"
          className={css.Input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="inputName"
          value={this.state.name}
          onChange={this.handleChange}
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
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
