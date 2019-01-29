import { fromJS } from 'immutable';
import forumFormReducer from '../reducer';

describe('forumFormReducer', () => {
  it('returns the initial state', () => {
    expect(forumFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
