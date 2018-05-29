import {
  TOGGLE_NAV,
  SET_LOCATION,
} from '../constants/nav.js';
import * as actions from '../actions/nav.js';
import store from '../store.js';

const initialState = {
  open: false,
  location: 'main',
};

export default function nav(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return { 
        ...state,
        open: action.data,
    };
    break;
    case SET_LOCATION:
      return {
      ...state,
      location: action.data,
    };
    break;
  default:
    return state;
  }
}
