import { createSelector } from 'reselect';

const selectCreatePage = state => state.get('createUserPage');

const makeSelectCreatePage = () =>
  createSelector(selectCreatePage, subState => subState.toJS());

export default makeSelectCreatePage;
export { selectCreatePage };
