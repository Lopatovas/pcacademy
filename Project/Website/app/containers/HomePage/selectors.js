import { createSelector } from 'reselect';

const selectHomePage = state => state.get('homePage');

const makeSelectHomePage = () =>
  createSelector(selectHomePage, subState => subState.toJS());

export default makeSelectHomePage;
export { selectHomePage };
