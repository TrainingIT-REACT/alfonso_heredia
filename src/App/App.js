import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Components/Home/Home';
import Albums from './Components/Albums/Albums';
import About from './Components/About/About';
import Songs from './Components/Songs/Songs';
import NavBar from './Components/NavBar/NavBar';

// Css
import './App.css';

const NotFound = () => <p>Ups! Parece que aquí no hay nada (404)</p>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/albumes" exact component={Albums} />
            <Route path="/albumes/:id" component={Songs} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
