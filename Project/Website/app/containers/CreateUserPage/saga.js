import { call, takeEvery } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { CREATE_USER } from './constants';
import * as userService from '../../api/services/user';

function* createUser(params) {
  try {
    yield call(userService.create, params.user);
    toastr.success('Success!', `Now log in to get started.`);
    yield params.history.push('/login');
  } catch (error) {
    if (error.response != null) {
      switch (error.response.status) {
        case 400:
          toastr.error(
            'Oops!',
            'Make sure you filled in all the required fields',
          );
          break;
        default:
          toastr.error(
            'Oops!',
            'A user with the specified email or password already exists',
          );
          break;
      }
    }
  }
}

export default function* getCreateUserPageSaga() {
  yield takeEvery(CREATE_USER, createUser);
}
