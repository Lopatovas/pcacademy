import { SET_PLAYER_DATA } from './constants';

export function setPlayer(player) {
  return {
    type: SET_PLAYER_DATA,
    player,
  };
}
