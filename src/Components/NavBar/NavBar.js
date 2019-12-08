import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from '../Home/Home';
import Albums from '../Albums/Albums';
import About from '../About/About';
import Songs from '../Songs/Songs';

import './NavBar.css'

class NavBar extends Component {

  render() {
    return (
      <Router>
        <div className="NavBar">
          <div className="navbar-container">
            <NavLink to="/" exact activeClassName="active" className="navbar-link">Home</NavLink>
          </div>
          <div className="navbar-container">
            <NavLink to="/albumes" activeClassName="active" className="navbar-link">Albumes</NavLink>
          </div>
          <div className="navbar-container">
            <NavLink to="/about" activeClassName="active" className="navbar-link">About</NavLink>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/albumes" exact component={Albums} />
          <Route path="/albumes/:id" component={Songs} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }

}

export default NavBar;
