import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Components/Home/Home';
import Albums from './Components/Albums/Albums';
import About from './Components/About/About';
import Songs from './Components/Songs/Songs';
import NavBar from './Components/NavBar/NavBar';

import Error from "./Components/Error/Error";

// Css
import './App.css';

const NotFound = () => <p>Ups! Parece que aquí no hay nada (404)</p>;

const initialState = {
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  onReset = () => this.setState(initialState);
  render() {
    return (
      <div className="App">
        <Error onReset={this.onReset} message="Ops! Algo ha salido mal">
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
        </Error>
      </div>
    );
  }
}

export default App;
