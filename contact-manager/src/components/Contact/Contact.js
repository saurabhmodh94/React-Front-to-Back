import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    let { name, age, email } = this.props;
    return (
      <ul>
        <li> Name: {name}</li>
        <li> Age: {age}</li>
        <li> Email: {email}</li>
      </ul>
    );
  }
}

export default Contact;
