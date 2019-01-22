import axios from 'axios';
import CONFIG from '../config';
import ENDPOINTS from '../endpoints/user';

export function create(user) {
  return axios.post(`${CONFIG.USER_URL}${ENDPOINTS.CREATE}`, {
    userName: user.userName,
    email: user.email,
    password: user.password,
  });
}

export function login(data) {
  return axios.post(`${CONFIG.USER_URL}${ENDPOINTS.LOGIN}`, {
    userName: data.userName,
    password: data.password,
  });
}
