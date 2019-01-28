import {
  SET_FIXTURES,
  GET_FIXTURES,
  SET_TABLE,
  GET_TABLE,
  SET_MATCHDAY,
} from './constants';

export function setFixtures(fixtures) {
  return {
    type: SET_FIXTURES,
    fixtures,
  };
}

export function getFixtures() {
  return {
    type: GET_FIXTURES,
  };
}

export function setTable(table) {
  return {
    type: SET_TABLE,
    table,
  };
}

export function getTable() {
  return {
    type: GET_TABLE,
  };
}

export function setMatchday(matchday) {
  return {
    type: SET_MATCHDAY,
    matchday,
  };
}
