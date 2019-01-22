import { call, takeEvery, put } from 'redux-saga/effects';
import { CREATE_USER, SET_USER } from './constants';
import * as userService from '../../api/services/user';

function* createUser(params) {
  const result = yield call(userService.create, params.user);
  console.log(result);
  yield put({
    type: SET_USER,
    user: result.data,
  });
}

export default function* getCreateUserPageSaga() {
  yield takeEvery(CREATE_USER, createUser);
}
