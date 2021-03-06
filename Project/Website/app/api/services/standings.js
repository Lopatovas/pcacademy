import axios from 'axios';
import CONFIG from '../config';
import ENDPOINTS from '../endpoints/league';

export function get() {
  return axios.get(`${CONFIG.LEAGUE_URL}${ENDPOINTS.STANDINGS}`, {
    headers: { 'X-Auth-Token': CONFIG.LEAGUE_TOKEN },
  });
}
