import { createContext } from 'react';

const UserContext = createContext({
  signedIn: false,
  username: '',
  updateUser: () => { }
});

export default UserContext;
