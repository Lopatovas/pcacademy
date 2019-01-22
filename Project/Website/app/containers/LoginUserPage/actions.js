import { LOGIN_USER, SET_USER } from './constants';

export function pushUser(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}
