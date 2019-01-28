import axios from 'axios';
import CONFIG from '../config';
import ENDPOINTS from '../endpoints/league';

export function getFixtures() {
  return axios.get(`${CONFIG.LEAGUE_URL}${ENDPOINTS.PREMIER_LEAGUE_FIXTURES}`, {
    headers: { 'X-Auth-Token': CONFIG.LEAGUE_TOKEN },
  });
}

export function getFixture(fixtureId) {
  return axios.get(`${CONFIG.LEAGUE_URL}${ENDPOINTS.MATCH}${fixtureId}`, {
    headers: { 'X-Auth-Token': CONFIG.LEAGUE_TOKEN },
  });
}
