import { GET_COMMENT, SET_COMMENT } from './constants';

export function getComments(user, pageId) {
  return {
    type: GET_COMMENT,
    pageId,
    user,
  };
}

export function setComment(comment) {
  return {
    type: SET_COMMENT,
    comment,
  };
}
