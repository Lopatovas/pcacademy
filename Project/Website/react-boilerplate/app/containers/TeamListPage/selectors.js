import { createSelector } from 'reselect';

const selectTeamListPage = state => state.get('teamListPage');

const makeSelectTeamListPage = () =>
  createSelector(selectTeamListPage, subState => subState.toJS());

export default makeSelectTeamListPage;
export { selectTeamListPage };
