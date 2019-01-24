import { fromJS } from 'immutable';
import { SET_USER } from './constants';

export const initialState = fromJS({
  user: {},
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.set('user', action.user);
    default:
      return state;
  }
}

export default loginPageReducer;
