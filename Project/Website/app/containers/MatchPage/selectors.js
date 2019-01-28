import { createSelector } from 'reselect';

const selectMatchPage = state => state.get('matchPage');

const makeSelectMatchPage = () =>
  createSelector(selectMatchPage, subState => subState.toJS());

export default makeSelectMatchPage;
export { selectMatchPage };
