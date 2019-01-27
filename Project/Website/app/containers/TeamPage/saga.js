import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
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
  try {
    const result = yield call(teamService.get, params.teamId);
    yield put({ type: SET_TEAM_DATA, team: result.data });
    yield put({ type: SET_PLAYERS_DATA, players: result.data.squad });
  } catch (error) {
    toastr.warning(
      'Oops!',
      'There was a problem with the server, please wait a minute and try again',
    );
  }
}

function* getStanding(params) {
  try {
    const result = yield call(standingsService.get);
    const tempPosition = result.data.standings[0].table;
    let position = {};
    for (let i = 0; i < tempPosition.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (tempPosition[i].team.id == params.teamId) {
        position = tempPosition[i];
        break;
      }
    }
    yield put({
      type: SET_STANDING_DATA,
      standing: position,
    });
  } catch (error) {
    toastr.warning(
      'Oops!',
      'There was a problem with the server, please wait a minute and try again',
    );
  }
}

export default function* getTeamSaga() {
  yield takeEvery(GET_TEAM_DATA, getTeam);
  yield takeEvery(GET_STANDING_DATA, getStanding);
}
