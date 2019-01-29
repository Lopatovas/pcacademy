import { fromJS } from 'immutable';
import { SET_COMMENT } from './constants';

export const initialState = fromJS({
  comments: [],
});

export default function forumReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENT:
      return state.set('comments', action.comments);
    default:
      return state;
  }
}
