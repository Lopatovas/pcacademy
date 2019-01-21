import { fromJS } from 'immutable';
import { SET_FIXTURES, SET_TABLE } from './constants';

const initialState = fromJS({
  fixtures: [],
  table: [],
});

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIXTURES:
      return state.set('fixtures', action.fixtures);
    case SET_TABLE:
      return state.set('table', action.table);
    default:
      return state;
  }
}
