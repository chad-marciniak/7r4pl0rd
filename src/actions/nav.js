import * as types from '../constants/nav.js';

export function toggleNav(data) {
  return {
    type: types.TOGGLE_NAV,
    data
  };
}

export function setLocation(data) {
  return {
    type: types.SET_LOCATION,
    data
  };
}
