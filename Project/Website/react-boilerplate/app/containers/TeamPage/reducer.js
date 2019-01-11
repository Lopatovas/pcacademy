import { fromJS } from 'immutable';
import { SET_PLAYERS_DATA } from './constants';

const initialState = fromJS({
  players: [],
});

export default function playersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYERS_DATA:
      return state.set('players', action.players);
    default:
      return state;
  }
}
