import React from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from '../AddContactForm/AddContactForm';
import FindContact from 'components/FindContact/FindContact';
import ContactList from 'components/ContactList/ContactList';
import styles from './LoginForm.module.css';

export class LoginForm extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contact = {
      name: form.elements.contact.value,
      number: form.elements.number.value,
      id: nanoid(),
    };

    if (
      this.state.contacts.filter(
        el => el.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      ).length >= 1
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.props.onSubmit({ contact });
    this.setState({ contacts: [...this.state.contacts, contact] });
    form.reset();
  };

  removeContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  find = event => {
    this.setState({ ...this.state, filter: event.target.value });
  };
  render() {
    const { filter, contacts } = this.state;
    return (
      <div className={styles.whatever}>
        <AddContactForm SubmitForm={this.handleSubmit} />
        <FindContact findContact={this.find} />
        <ContactList
          filterValue={filter}
          contactsArray={contacts}
          remove={this.removeContact}
        />
      </div>
    );
  }
}
