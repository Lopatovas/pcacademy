import { SET_PLAYERS_DATA } from './constants';

export function setPlayers(players) {
  return {
    type: SET_PLAYERS_DATA,
    players,
  };
}
