import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar navbar-dark bg-dark">
        <ul className="nav">
          <li className="nav-item"><NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/albumes" activeClassName="active" className="nav-link">Albumes</NavLink></li>
          <li className="nav-item"><NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink></li>
          <li className="nav-item"><NavLink to="/profile" activeClassName="active" className="nav-link">Profile</NavLink></li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
