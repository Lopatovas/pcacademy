import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { POST_COMMENT } from './constants';
import { GET_COMMENT } from '../Forum/constants';
import * as userService from '../../api/services/user';

function* postComment(params) {
  try {
    yield call(
      userService.postComment,
      params.comment.comment,
      params.user,
      params.id,
    );
    yield put({ type: GET_COMMENT, user: params.user, pageId: params.id });
    toastr.success('Success!', `Your post has been submited`);
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
  yield takeEvery(POST_COMMENT, postComment);
}
