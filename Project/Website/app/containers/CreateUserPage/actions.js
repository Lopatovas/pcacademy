import { CREATE_USER } from './constants';

export function pushUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}
