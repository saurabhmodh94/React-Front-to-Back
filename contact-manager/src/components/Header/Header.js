import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => {
  let { branding } = props;
  const brandingStyle = {
    color: 'red'
  };
  return (
    <div style={{ fontSize: '20px' }}>
      <h1 style={brandingStyle}> {branding} </h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'The App'
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
