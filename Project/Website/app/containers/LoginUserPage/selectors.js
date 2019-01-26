import { createSelector } from 'reselect';

const selectLoginPage = state => state.get('user');

const makeSelectLoginPage = () =>
  createSelector(selectLoginPage, subState => subState.toJS());

export default makeSelectLoginPage;
export { selectLoginPage };
