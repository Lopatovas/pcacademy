import { SET_PLAYERS_DATA, SET_TEAM_DATA } from './constants';

export function setPlayers(players) {
  return {
    type: SET_PLAYERS_DATA,
    players,
  };
}

export function setTeam(team) {
  return {
    type: SET_TEAM_DATA,
    team,
  };
}
