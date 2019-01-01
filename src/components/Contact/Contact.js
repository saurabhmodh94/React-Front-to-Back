import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Consumer } from '../../context';

import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

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
  // onDeleteClick = async (id, dispatch) => {
  onDeleteClick = id => {
    this.props.deleteContact(id);
    // try {
    //   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}/`);
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   dispatch({ type: 'DELETE_CONTACT', payload: id });
    // }
    // .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  };
  render() {
    // return (
    //   <Consumer>
    //     {value => {
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
            onClick={this.onDeleteClick.bind(this, id)}
            className="fas fa-times"
            style={{ cursor: 'pointer', color: 'red', float: 'right' }}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item"> Phone: {phone}</li>
            <li className="list-group-item"> Email: {email}</li>
          </ul>
        ) : null}
      </div>
    );
    //     }}
    //   </Consumer>
    // );
  }
}

export default connect(
  null,
  { deleteContact }
)(Contact);
