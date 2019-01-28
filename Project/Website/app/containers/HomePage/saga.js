import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GET_FIXTURES, GET_TABLE, SET_FIXTURES, SET_TABLE } from './constants';
import * as fixtureService from '../../api/services/fixtures';
import * as tableService from '../../api/services/standings';

function* getFixtures() {
  try {
    const result = yield call(fixtureService.getFixtures);
    yield put({
      type: SET_FIXTURES,
      fixtures: result.data.matches,
    });
  } catch (error) {
    toastr.warning(
      'Oops!',
      'There was a problem with the server, please wait a minute and try again',
    );
  }
}

function* getTable() {
  try {
    const result = yield call(tableService.get);
    yield put({
      type: SET_TABLE,
      table: result.data.standings[0].table,
    });
  } catch (error) {
    toastr.warning(
      'Oops!',
      'There was a problem with the server, please wait a minute and try again',
    );
  }
}

export default function* getHomePageSaga() {
  yield takeEvery(GET_FIXTURES, getFixtures);
  yield takeEvery(GET_TABLE, getTable);
}
