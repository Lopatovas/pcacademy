import { CREATE_USER } from './constants';

export function pushUser(user, history) {
  return {
    type: CREATE_USER,
    user,
    history,
  };
}
