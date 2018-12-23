import React, { Component } from 'react';
import uuid from 'uuid';
import TextInputGroup from './../TextInputGroup/TextInputGroup';
import { Consumer } from './../../context';
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
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

    dispatch({ type: 'ADD_CONTACT', payload: new_contact });

    // clear state
    // this.nameInput.current.value = '';
    this.setState({
      name: '',
      email: '',
      age: '',
      errors: {}
    });
  };
  static defaultProps = {
    name: ''
  };
  render() {
    const { email, age } = this.state;
    const { name } = this.props;

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
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Age"
                    type="number"
                    name="age"
                    placeholder="Enter Age..."
                    value={age}
                    onChange={this.onChange}
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
