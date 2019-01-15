import { fromJS } from 'immutable';
import { SET_FIXTURES } from './constants';

const initialState = fromJS({
  fixtures: [],
});

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIXTURES:
      return state.set('fixtures', action.fixtures);
    default:
      return state;
  }
}
