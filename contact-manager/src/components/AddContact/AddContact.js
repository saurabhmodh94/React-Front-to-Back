import React, { Component } from 'react';
import uuid from 'uuid';
import { Consumer } from './../../context';
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }
  state = {
    // name: '',
    email: '',
    age: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { email, age } = this.state;
    const name = this.nameInput.current.value;
    const new_contact = {
      id: uuid(),
      name,
      email,
      age
    }; //ES6

    dispatch({ type: 'ADD_CONTACT', payload: new_contact });

    // clear state
    this.nameInput.current.value = '';
    this.setState({
      // name: '',
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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      defaultValue={name}
                      ref={this.nameInput}
                      // ref="nameInput"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      name="age"
                      className="form-control form-control-lg"
                      placeholder="Enter Age..."
                      value={age}
                      onChange={this.onChange}
                    />
                  </div>
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
