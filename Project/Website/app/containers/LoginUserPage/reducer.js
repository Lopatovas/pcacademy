import { fromJS } from 'immutable';
import { SET_USER } from './constants';

const initialState = fromJS({
  user: {},
});

export default function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.set('user', action.user);
    default:
      return state;
  }
}
