import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { LOGIN_USER, SET_USER } from './constants';
import * as userService from '../../api/services/user';

function* loginUser(params) {
  try {
    const result = yield call(userService.login, params.user);
    if (result.data.body == null) {
      throw new Error(result.data.message);
    }
    toastr.success(
      result.statusText,
      `Welcome back ${result.data.body.userName}`,
    );
    yield put({
      type: SET_USER,
      user: result.data,
    });
  } catch (error) {
    toastr.error('Oops!', error.message);
  }
}

export default function* getLoginUserPageSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}
