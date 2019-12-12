import React, { createRef } from 'react';
import { Redirect } from 'react-router-dom';

// Contexto de usuario
import UserContext from '../../Contexts/UserContext';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Login = ({ location }) => {
  const inputUsername = createRef();

  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div>
        {signedIn ? (
          <>
            <p>Ya puedes ver tu profile</p>
            <Redirect
              to={{
                pathname: '/profile',
              }}
            />
          </>
        ) : (
            <>
              <form
                className="login-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  updateUser(true, inputUsername.current.value);
                }}
              >
                <div className="form-group">
                  <label for="inputUsername">Username</label>
                  <input
                    name="username"
                    type="text"
                    ref={inputUsername}
                    className="form-control"
                    id="inputUsername"
                    aria-describedby="userHelp"
                    placeholder="Type your username" />
                  <small id="userHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                    placeholder="Type your password" />
                  <small id="passwordHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">LOGIN</button>
              </form>
              {(location.state && location.state.message) &&
                <p>
                  {location.state.message}
                </p>
              }
            </>
          )}
      </div>
    }}
  </UserContext.Consumer>;
}

export default Login;
