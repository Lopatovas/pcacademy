import { createSelector } from 'reselect';

const selectHeader = state => state.get('user');

const makeSelectHeader = () =>
  createSelector(selectHeader, subState => subState.toJS());

export default makeSelectHeader;
export { selectHeader };
