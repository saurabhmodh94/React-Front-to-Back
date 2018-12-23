import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }
  state = {
    // name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log({
      ...this.state,
      name: this.nameInput.current.value
      // name: this.refs.nameInput.value.trim() //old api
    });
  };
  static defaultProps = {
    name: ''
  };
  render() {
    const { email, phone } = this.state;
    const { name } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
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
  }
}

export default AddContact;
