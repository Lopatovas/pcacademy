import { fromJS } from 'immutable';
import { SET_USER, LOGOUT_USER } from './constants';

export const initialState = fromJS({
  user: '',
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      if (action.user.user === undefined) {
        return state.set('user', action.user.body.userName);
      }
      return state.set('user', action.user.user.userName);
    case LOGOUT_USER:
      return state.set('user', '');
    default:
      return state;
  }
}

export default loginPageReducer;
