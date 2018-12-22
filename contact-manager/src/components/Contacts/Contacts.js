import React, { Component } from 'react';
import Contact from './../Contact/Contact';

export class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          age: 22,
          email: 'john.doe@gmail.com'
        },
        {
          id: 2,
          name: 'New Doe',
          age: 23,
          email: 'new.doe@gmail.com'
        }
      ]
    };
  }
  deleteContact = id => {
    let newContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContactHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
