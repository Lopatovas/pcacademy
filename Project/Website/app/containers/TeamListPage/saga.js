import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_TEAMS_DATA, SET_TEAMS_DATA } from './constants';
import * as teamService from '../../api/services/teamList';

function* getTeams() {
  const result = yield call(teamService.get);
  yield put({
    type: SET_TEAMS_DATA,
    teams: result.data.teams,
  });
}

export default function* getTeamsSaga() {
  yield takeEvery(GET_TEAMS_DATA, getTeams);
}
