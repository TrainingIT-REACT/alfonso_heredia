import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Contexto de usuario
import UserContext from '../../Contexts/UserContext';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Login = ({ location }) => {
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
              <button onClick={() => updateUser(true)}>Login</button>
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
