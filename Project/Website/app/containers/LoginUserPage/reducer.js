import { fromJS } from 'immutable';
import { SET_USER, LOGOUT_USER } from './constants';

export const initialState = fromJS({
  user: { user: localStorage.user || '', token: localStorage.token || '' },
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem('user', action.user.body.userName);
      localStorage.setItem('token', action.user.token);
      return state.set('user', {
        user: action.user.body.userName,
        token: action.user.token,
      });
    case LOGOUT_USER:
      localStorage.clear();
      return state.set('user', { user: '', token: '' });
    default:
      return state;
  }
}

export default loginPageReducer;
