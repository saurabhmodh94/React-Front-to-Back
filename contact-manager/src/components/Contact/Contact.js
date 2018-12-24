import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

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
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}/`);
    } catch (e) {
      console.log(e);
    } finally {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
    // .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  };
  render() {
    return (
      <Consumer>
        {value => {
          let { id, name, phone, email } = this.props.contact;
          return (
            <div className="card card-body mb-3">
              <h4 className="list-group-item">
                {name}
                <i
                  onClick={this.onShowClick.bind(this, name)}
                  className="fas fa-sort-down"
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                  className="fas fa-times"
                  style={{ color: 'red', float: 'right' }}
                />
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> Phone: {phone}</li>
                  <li className="list-group-item"> Email: {email}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
