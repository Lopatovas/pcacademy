import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GET_COMMENT, SET_COMMENT } from './constants';
import * as userService from '../../api/services/user';

function* getComments(params) {
  try {
    const result = yield call(
      userService.getComments,
      params.user,
      params.pageId,
    );
    yield put({ type: SET_COMMENT, comments: result.data });
  } catch (error) {
    if (error.response != null) {
      toastr.error(
        'Oops!',
        'There was a problem with the server, please try again',
      );
    }
  }
}

export default function* getForumPostSaga() {
  yield takeEvery(GET_COMMENT, getComments);
}
