import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";

import Home from './Components/Home/Home';
import Albums from './Components/Albums/Albums';
import About from './Components/About/About';
import Songs from './Components/Songs/Songs';
import NavBar from './Components/NavBar/NavBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';

import Error from "./Components/Error/Error";

import UserContext from './Contexts/UserContext'

// Store
import store from './store';

// Css
import './bootstrap.min.css';
import './App.css';

const NotFound = () => <p>Ups! Parece que aquí no hay nada (404)</p>;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      username: '',
      updateUser: this.updateUser
    }
  }

  onReset = () => this.setState({});
  updateUser = (signedIn, username) => {
    this.setState(() => ({ signedIn, username }));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Error onReset={this.onReset} message="Ops! Algo ha salido mal">
            <Router>
              <UserContext.Provider value={this.state}>
                <NavBar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/albumes" exact component={Albums} />
                  <Route path="/albumes/:id" component={Songs} />
                  <Route path="/about" component={About} />
                  <Route path="/login" component={Login} />
                  <PrivateRoute path="/profile" component={Profile} />
                  <Route component={NotFound} />
                </Switch>
              </UserContext.Provider>
            </Router>
          </Error>
        </div>
      </Provider>
    );
  }
}

export default App;
