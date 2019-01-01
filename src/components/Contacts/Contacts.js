import React, { Component } from 'react';
// import { Consumer } from './../../context';
import Contact from './../Contact/Contact';

export class Contacts extends Component {
  state = {
    contacts: []
  };

  render() {
    // return (
    //   <Consumer>
    //     {value => {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
    //     }}
    //   </Consumer>
    // );
  }
}

export default Contacts;
