import { createSelector } from 'reselect';

const selectTeamPage = state => state.get('teamPage');

const makeSelectTeamPage = () =>
  createSelector(selectTeamPage, subState => subState.toJS());

export default makeSelectTeamPage;
export { selectTeamPage };
