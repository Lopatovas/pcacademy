import { POST_COMMENT } from './constants';

export function postComment(comment, user, id) {
  return {
    type: POST_COMMENT,
    comment,
    user,
    id,
  };
}
