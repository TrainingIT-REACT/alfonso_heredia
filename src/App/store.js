import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
import albums from './Reducers/albums';
import songs from './Reducers/songs';


export default createStore(
  combineReducers({albums, songs}),
  applyMiddleware(promise())
);
