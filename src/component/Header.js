import React from 'react';
import PropTypes from 'prop-types';

const Header = ({add}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="#">Quotes Gallore</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <button 
          type="button" 
          className="btn btn-outline-success btn-sm"
          onClick={add}
        >
          Add Quote
        </button>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  add: PropTypes.func,
}

export default Header;