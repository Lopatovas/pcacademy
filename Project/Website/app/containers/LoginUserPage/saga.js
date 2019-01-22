import { call, takeEvery, put } from 'redux-saga/effects';
import { LOGIN_USER, SET_USER } from './constants';
import * as userService from '../../api/services/user';

function* loginUser(params) {
  const result = yield call(userService.login, params.user);
  console.log(result);
  yield put({
    type: SET_USER,
    user: result.data,
  });
}

export default function* getLoginUserPageSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}
