import React, { Component } from 'react';
import axios from 'axios';
import TextInputGroup from './../TextInputGroup/TextInputGroup';
import { Consumer } from './../../context';

import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
    // const response = await axios.get(
    //   `https://jsonplaceholder.typicode.com/users/${id}`
    // );
    // this.setState({
    //   name: response.data.name,
    //   email: response.data.email,
    //   phone: response.data.phone
    // });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit = async (dispatch, e) => {
  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Check For Errors or Use required
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const { id } = this.props.match.params;
    const updated_contact = {
      id,
      name,
      email,
      phone
    }; //ES6

    this.props.updateContact(updated_contact);
    // const response = await axios.put(
    //   `https://jsonplaceholder.typicode.com/users/${id}`,
    //   new_contact
    // );
    // dispatch({ type: 'UPDATE_CONTACT', payload: response.data });

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    //redirect
    this.props.history.push('/');
  };
  static defaultProps = {
    name: ''
  };
  render() {
    const { name, email, phone } = this.state;
    // const { name } = this.props;

    // return (
    //   <Consumer>
    //     {value => {
    //       const { dispatch } = value;
    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="Name"
              type="text"
              name="name"
              placeholder="Enter Name..."
              // defaultValue={name}
              // ref={this.nameInput}
              // ref="nameInput"
              value={name}
              onChange={this.onChange}
              error={this.state.errors.name}
            />
            <TextInputGroup
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              onChange={this.onChange}
              error={this.state.errors.email}
            />
            <TextInputGroup
              label="Phone"
              type="text"
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onChange}
              error={this.state.errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
    //     }}
    //   </Consumer>
    // );
  }
}

const mapStateToProps = state => ({
  contact: state.contacts.contact
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
