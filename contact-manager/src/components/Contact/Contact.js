import React, { Component } from 'react';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: true
    };
  }
  // onShowClick(name, e) {
  //   console.log(e, this.state, name);
  // }
  onShowClick = (name, e) => {
    // console.log(e, this.state, name);
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  render() {
    let { name, age, email } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4 className="list-group-item">
          {name}
          <i
            onClick={this.onShowClick.bind(this, name)}
            className="fas fa-sort-down"
          />
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item"> Age: {age}</li>
            <li className="list-group-item"> Email: {email}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
