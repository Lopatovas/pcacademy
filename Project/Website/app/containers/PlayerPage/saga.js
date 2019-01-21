import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_PLAYER_DATA, SET_PLAYER_DATA } from './constants';
import * as playerService from '../../api/services/player';

function* getPlayer(params) {
  const result = yield call(playerService.get, params.playerId);
  yield put({ type: SET_PLAYER_DATA, player: result.data });
}

export default function* getPlayerSaga() {
  yield takeEvery(GET_PLAYER_DATA, getPlayer);
}
