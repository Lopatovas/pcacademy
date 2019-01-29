import { fromJS } from 'immutable';
import { SET_USER, LOGOUT_USER } from './constants';

export const initialState = fromJS({
  user: { user: '', token: '' },
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.set('user', {
        user: action.user.body.userName,
        token: action.user.token,
      });
    case LOGOUT_USER:
      return state.set('user', '');
    default:
      return state;
  }
}

export default loginPageReducer;
