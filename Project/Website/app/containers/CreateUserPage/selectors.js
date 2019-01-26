import { createSelector } from 'reselect';

const selectCreatePage = state => state.get('user');

const makeSelectCreatePage = () =>
  createSelector(selectCreatePage, subState => subState.toJS());

export default makeSelectCreatePage;
export { selectCreatePage };
