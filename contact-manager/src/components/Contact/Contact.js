import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    let { name, age, email } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <ul className="list-group">
          <li className="list-group-item"> Name: {name}</li>
          <li className="list-group-item"> Age: {age}</li>
          <li className="list-group-item"> Email: {email}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
