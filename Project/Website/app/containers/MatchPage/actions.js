/*
 *
 * MatchPage actions
 *
 */

import { GET_FIXTURE, SET_FIXTURE } from './constants';

export function getFixture(fixtureId) {
  return {
    type: GET_FIXTURE,
    fixtureId,
  };
}

export function setFixture(fixture) {
  return {
    type: SET_FIXTURE,
    fixture,
  };
}
