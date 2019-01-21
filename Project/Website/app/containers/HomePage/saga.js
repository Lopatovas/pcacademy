import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_FIXTURES, GET_TABLE, SET_FIXTURES, SET_TABLE } from './constants';
import * as fixtureService from '../../api/services/fixtures';
import * as tableService from '../../api/services/standings';

function* getFixtures() {
  const result = yield call(fixtureService.get);
  yield put({
    type: SET_FIXTURES,
    fixtures: result.data.matches,
  });
}

function* getTable() {
  const result = yield call(tableService.get);
  yield put({
    type: SET_TABLE,
    table: result.data.standings[0].table,
  });
}

export default function* getHomePageSaga() {
  yield takeEvery(GET_FIXTURES, getFixtures);
  yield takeEvery(GET_TABLE, getTable);
}
