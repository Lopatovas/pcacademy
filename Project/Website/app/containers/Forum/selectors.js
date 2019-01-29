import { createSelector } from 'reselect';

const selectForum = state => state.get('forum');

const makeSelectForum = () =>
  createSelector(selectForum, subState => subState.toJS());

export default makeSelectForum;
export { selectForum };
