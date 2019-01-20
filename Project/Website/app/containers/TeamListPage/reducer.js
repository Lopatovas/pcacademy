import { fromJS } from 'immutable';
import { SET_TEAMS_DATA } from './constants';

const initialState = fromJS({
  teams: [],
});

export default function teamsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAMS_DATA:
      return state.set('teams', action.teams);
    default:
      return state;
  }
}
