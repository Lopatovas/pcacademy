import { createSelector } from 'reselect';

const selectForm = state => state.get('form');

const makeSelectForm = () =>
  createSelector(selectForm, subState => subState.toJS());

export default makeSelectForm;
export { selectForm };
