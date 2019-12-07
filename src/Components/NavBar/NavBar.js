import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Albums from '../Albums/Albums';
import About from '../About/About';

class NavBar extends Component {

  render() {
    return (
      <Router>
        <div className="NavBar">
          <div className="link-container">
            <Link to="/" className="link">Home</Link>
          </div>
          <div className="link-container">
            <Link to="/albumes" className="link">Albumes</Link>
          </div>
          <div className="link-container">
            <Link to="/about" className="link">About</Link>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/albumes" component={Albums} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }

}

export default NavBar;
