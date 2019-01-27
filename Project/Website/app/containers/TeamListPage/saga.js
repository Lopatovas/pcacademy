import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GET_TEAMS_DATA, SET_TEAMS_DATA } from './constants';
import * as teamService from '../../api/services/teamList';

function* getTeams() {
  try {
    const result = yield call(teamService.get);
    yield put({
      type: SET_TEAMS_DATA,
      teams: result.data.teams,
    });
  } catch (error) {
    toastr.warning(
      'Oops!',
      'There was a problem with the server, please wait a minute and try again',
    );
  }
}

export default function* getTeamsSaga() {
  yield takeEvery(GET_TEAMS_DATA, getTeams);
}
