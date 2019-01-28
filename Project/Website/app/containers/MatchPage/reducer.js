import { fromJS } from 'immutable';
import { SET_FIXTURE } from './constants';

export const initialState = fromJS({
  fixture: {},
});

export default function matchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIXTURE:
      return state.set('fixture', action.fixture);
    default:
      return state;
  }
}
