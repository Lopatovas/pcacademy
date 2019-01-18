import { call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_TEAMS_DATA } from './constants';
import * as teamService from '../../api/services/teamList';

function* getTeams() {
  const result = yield call(teamService.get);
  console.log(`result ${JSON.stringify(result)}`);
}

export default function* getTeamsSaga() {
  yield takeEvery(GET_TEAMS_DATA, getTeams);
}
