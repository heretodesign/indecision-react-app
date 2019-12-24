import React, { Component } from 'react';
import { string } from 'postcss-selector-parser';
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
      
    </div>
  );
}

Header.defaultProps = {
  title: PropTypes.string.isRequired,
}

export default Header;
