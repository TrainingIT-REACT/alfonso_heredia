import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Contexto de usuario
import UserContext from '../../Contexts/UserContext';

class NavBar extends Component {

  render() {
    return <UserContext.Consumer>
      {({ signedIn }) => {
      return (
        <nav className="navbar navbar navbar-dark bg-dark">
          <ul className="nav">
            <li className="nav-item"><NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/albumes" activeClassName="active" className="nav-link">Albumes</NavLink></li>
            <li className="nav-item"><NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink></li>
            {signedIn ? (
              <li className="nav-item"><NavLink to="/profile" activeClassName="active" className="nav-link">Profile</NavLink></li>
            ) : (
              <li className="nav-item"><NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink></li>
            )
            }
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      );
    }}
    </UserContext.Consumer>;
  }
}

export default NavBar;
