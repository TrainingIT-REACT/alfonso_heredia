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
        </ul>
      </nav>
    );
  }
}

export default NavBar;
