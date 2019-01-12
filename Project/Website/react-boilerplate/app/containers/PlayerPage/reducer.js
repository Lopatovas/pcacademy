import { fromJS } from 'immutable';
import { SET_PLAYER_DATA } from './constants';

const initialState = fromJS({
  player: {},
});

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_DATA:
      return state.set('player', action.player);
    default:
      return state;
  }
}
