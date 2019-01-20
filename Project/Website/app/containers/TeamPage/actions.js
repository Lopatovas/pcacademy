import {
  SET_PLAYERS_DATA,
  SET_TEAM_DATA,
  GET_TEAM_DATA,
  GET_STANDING_DATA,
  SET_STANDING_DATA,
} from './constants';

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

export function getTeam(teamId) {
  return {
    type: GET_TEAM_DATA,
    teamId,
  };
}

export function getStanding(teamId) {
  return {
    type: GET_STANDING_DATA,
    teamId,
  };
}

export function setStanding(standing) {
  return {
    type: SET_STANDING_DATA,
    standing,
  };
}
