import { call, takeEvery, put } from 'redux-saga/effects';
import { CREATE_USER } from './constants';
import { SET_USER } from '../LoginUserPage/constants';
import * as userService from '../../api/services/user';

function* createUser(params) {
  try {
    const result = yield call(userService.create, params.user);
    yield put({
      type: SET_USER,
      user: result.data,
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* getCreateUserPageSaga() {
  yield takeEvery(CREATE_USER, createUser);
}
