import React, { Component } from 'react';
// import { Consumer } from './../../context';
import Contact from './../Contact/Contact';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { GET_CONTACTS } from '../../actions/types';
import { getContacts } from '../../actions/contactActions';

export class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    // return (
    //   <Consumer>
    //     {value => {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
    //     }}
    //   </Consumer>
    // );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
});

// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
