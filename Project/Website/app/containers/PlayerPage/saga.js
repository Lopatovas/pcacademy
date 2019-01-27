import { call, takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GET_PLAYER_DATA, SET_PLAYER_DATA } from './constants';
import * as playerService from '../../api/services/player';

function* getPlayer(params) {
  try {
    const result = yield call(playerService.get, params.playerId);
    yield put({ type: SET_PLAYER_DATA, player: result.data });
  } catch (error) {
    toastr.warning(
      'Oops!',
      'There was a problem with the server, please wait a minute and try again',
    );
  }
}

export default function* getPlayerSaga() {
  yield takeEvery(GET_PLAYER_DATA, getPlayer);
}
