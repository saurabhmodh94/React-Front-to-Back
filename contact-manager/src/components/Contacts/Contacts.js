import React, { Component } from 'react';
import { Consumer } from './../../context';
import Contact from './../Contact/Contact';

export class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const contacts = value.contacts;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
