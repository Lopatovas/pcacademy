import { SET_TEAMS_DATA } from './constants';

export function setTeams(teams) {
  return {
    type: SET_TEAMS_DATA,
    teams,
  };
}
