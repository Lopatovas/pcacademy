import { fromJS } from 'immutable';
import { SET_FIXTURES, SET_TABLE, SET_MATCHDAY } from './constants';

const initialState = fromJS({
  fixtures: [],
  table: [],
  matchday: 1,
});

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIXTURES:
      return state.set('fixtures', action.fixtures);
    case SET_TABLE:
      return state.set('table', action.table);
    case SET_MATCHDAY:
      return state.set('matchday', action.matchday);
    default:
      return state;
  }
}
