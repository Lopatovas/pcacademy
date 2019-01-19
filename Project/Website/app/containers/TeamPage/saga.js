import { call, takeEvery, put } from 'redux-saga/effects';
import {
  GET_TEAM_DATA,
  GET_STANDING_DATA,
  SET_STANDING_DATA,
  SET_TEAM_DATA,
  SET_PLAYERS_DATA,
} from './constants';
import * as teamService from '../../api/services/team';
import * as standingsService from '../../api/services/standings';

function* getTeam(params) {
  const result = yield call(teamService.get, params.teamId);
  console.log(result.data);
  yield put({ type: SET_TEAM_DATA, team: result.data });
  yield put({ type: SET_PLAYERS_DATA, players: result.data.squad });
}

function* getStanding() {
  const result = yield call(standingsService.get);
  console.log(result);
  yield put({ type: SET_STANDING_DATA, standing: result.standings });
}

export default function* getTeamSaga() {
  yield takeEvery(GET_TEAM_DATA, getTeam);
  yield takeEvery(GET_STANDING_DATA, getStanding);
}
