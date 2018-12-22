import React, { Component } from 'react';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // onShowClick(name, e) {
  //   console.log(e, this.state, name);
  // }
  onShowClick = (name, e) => {
    console.log(e, this.state, name);
  };
  render() {
    let { name, age, email } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <ul className="list-group">
          <li className="list-group-item">
            Name: {name}
            <i
              onClick={this.onShowClick.bind(this, name)}
              className="fas fa-sort-down"
            />
          </li>
          <li className="list-group-item"> Age: {age}</li>
          <li className="list-group-item"> Email: {email}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
