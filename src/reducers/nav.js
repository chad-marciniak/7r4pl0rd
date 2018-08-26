import { TOGGLE_NAV, SET_LOCATION } from '../constants/nav';
// import * as actions from '../actions/nav';
// import store from '../store';

const initialState = {
  open: false,
  location: 'main'
};

export default function nav(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        open: action.data
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.data
      };
    default:
      return state;
  }
}
