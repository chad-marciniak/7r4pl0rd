import { combineReducers } from 'redux';
import app from './app';
import nav from './nav.js';

const rootReducer = combineReducers({
  app,
  nav,
});

export default rootReducer;
