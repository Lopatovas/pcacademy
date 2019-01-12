import { createSelector } from 'reselect';

const selectPlayerPage = state => state.get('playerPage');

const makeSelectPlayerPage = () =>
  createSelector(selectPlayerPage, subState => subState.toJS());

export default makeSelectPlayerPage;
export { selectPlayerPage };
