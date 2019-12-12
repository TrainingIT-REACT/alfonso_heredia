import React from 'react';
// Contexto de usuario
import UserContext from '../../Contexts/UserContext';

const Profile = () => {
  return <UserContext.Consumer>
    {({ username, updateUser }) => {
      return <div>
        <h2> {username} bienvenido a tu profile</h2>
        <p>Esta zona es privada y solo la ves tu</p>
        <button className="btn btn-primary" onClick={() => updateUser(false,'')}>Logout</button>
      </div>;
    }}
  </UserContext.Consumer>;
}

export default Profile;
