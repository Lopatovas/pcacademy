import axios from 'axios';
import CONFIG from '../config';
import ENDPOINTS from '../endpoints/league';

export function get(id) {
  return axios.get(`${CONFIG.LEAGUE_URL}${ENDPOINTS.TEAM}/${id}`, {
    headers: { 'X-Auth-Token': CONFIG.LEAGUE_TOKEN },
  });
}
