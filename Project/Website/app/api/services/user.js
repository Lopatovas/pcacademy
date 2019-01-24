import axios from 'axios';
import CONFIG from '../config';
import ENDPOINTS from '../endpoints/user';

export function create(user) {
  return axios.post(`${CONFIG.USER_URL}${ENDPOINTS.CREATE}`, user);
}

export function login(user) {
  return axios.post(`${CONFIG.USER_URL}${ENDPOINTS.LOGIN}`, user);
}
