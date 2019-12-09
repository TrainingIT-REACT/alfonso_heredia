import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css'


class NavBar extends Component {

  render() {
    return (
      <nav className="NavBar">
        <ul>
          <li><NavLink to="/" exact activeClassName="active" className="navbar-link">Home</NavLink></li>
          <li><NavLink to="/albumes" activeClassName="active" className="navbar-link">Albumes</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" className="navbar-link">About</NavLink></li>
          <li><NavLink to="/login" activeClassName="active" className="navbar-link">Login</NavLink></li>
          <li><NavLink to="/profile" activeClassName="active" className="navbar-link">Profile</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
