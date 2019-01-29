import axios from 'axios';
import CONFIG from '../config';
import ENDPOINTS from '../endpoints/user';

export function create(user) {
  return axios.post(`${CONFIG.USER_URL}${ENDPOINTS.CREATE}`, user);
}

export function login(user) {
  return axios.post(`${CONFIG.USER_URL}${ENDPOINTS.LOGIN}`, user);
}

export function postComment(comment, user, id) {
  return axios.post(
    `${CONFIG.USER_URL}${ENDPOINTS.COMMENT}`,
    { userName: user.user, text: comment, pageId: id },
    { headers: { token: user.token } },
  );
}

export function getComments(user, id) {
  return axios.get(`${CONFIG.USER_URL}${ENDPOINTS.COMMENT}/${id}`, {
    headers: { token: user.token },
  });
}
