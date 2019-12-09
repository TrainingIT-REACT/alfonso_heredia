import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Home from '../Home/Home';
import Albums from '../Albums/Albums';
import About from '../About/About';
import Songs from '../Songs/Songs';

import './NavBar.css'

const NotFound = () => <p>Ups! Parece que aquí no hay nada (404)</p>;

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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/albumes" exact component={Albums} />
            <Route path="/albumes/:id" component={Songs} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default NavBar;
