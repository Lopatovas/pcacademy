import { fromJS } from 'immutable';
import {
  SET_PLAYERS_DATA,
  SET_TEAM_DATA,
  SET_STANDING_DATA,
} from './constants';

const initialState = fromJS({
  team: {},
  players: [],
  standing: {},
});

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYERS_DATA:
      return state.set('players', action.players);
    case SET_TEAM_DATA:
      return state.set('team', action.team);
    case SET_STANDING_DATA:
      return state.set('standing', action.standing);
    default:
      return state;
  }
}
