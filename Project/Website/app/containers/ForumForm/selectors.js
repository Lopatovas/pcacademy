import { createSelector } from 'reselect';
import userSelector from '../LoginUserPage/selectors';

const makeSelectForum = () => createSelector(userSelector);

export default makeSelectForum;
