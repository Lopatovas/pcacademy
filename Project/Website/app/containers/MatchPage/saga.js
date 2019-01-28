import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GET_FIXTURE, SET_FIXTURE } from './constants';
import * as fixtureService from '../../api/services/fixtures';

function* getFixture(params) {
  try {
    const result = yield call(fixtureService.getFixture, params.fixtureId);
    yield put({ type: SET_FIXTURE, fixture: result.data });
  } catch (error) {
    toastr.warning(
      'Oops!',
      'There was a problem with the server, please wait a minute and try again',
    );
  }
}

export default function* getPlayerSaga() {
  yield takeEvery(GET_FIXTURE, getFixture);
}
