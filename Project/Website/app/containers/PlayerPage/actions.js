import { SET_PLAYER_DATA, GET_PLAYER_DATA } from './constants';

export function setPlayer(player) {
  return {
    type: SET_PLAYER_DATA,
    player,
  };
}

export function getPlayer(playerId) {
  return {
    type: GET_PLAYER_DATA,
    playerId,
  };
}
