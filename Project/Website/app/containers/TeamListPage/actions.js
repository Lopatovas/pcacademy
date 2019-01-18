import { SET_TEAMS_DATA, GET_TEAMS_DATA } from './constants';

export function setTeams(teams) {
  return {
    type: SET_TEAMS_DATA,
    teams,
  };
}

export function getTeams() {
  return {
    type: GET_TEAMS_DATA,
  };
}
