import React, { Component } from 'react';
import uuid from 'uuid';
import TextInputGroup from './../TextInputGroup/TextInputGroup';
import { Consumer } from './../../context';
class AddContact extends Component {
  constructor(props) {
    super(props);
    // this.nameInput = React.createRef();
  }
  state = {
    name: '',
    email: '',
    age: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, age } = this.state;
    // const name = this.nameInput.current.value;
    const new_contact = {
      id: uuid(),
      name,
      email,
      age
    }; //ES6
    // Check For Errors or Use required
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (age === '') {
      this.setState({ errors: { age: 'Age is required' } });
      return;
    }

    dispatch({ type: 'ADD_CONTACT', payload: new_contact });

    // clear state
    // this.nameInput.current.value = '';
    this.setState({
      name: '',
      email: '',
      age: '',
      errors: {}
    });

    //redirect
    this.props.history.push('/');
  };
  static defaultProps = {
    name: ''
  };
  render() {
    const { name, email, age } = this.state;
    // const { name } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
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
                    label="Age"
                    type="number"
                    name="age"
                    placeholder="Enter Age..."
                    value={age}
                    onChange={this.onChange}
                    error={this.state.errors.age}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
