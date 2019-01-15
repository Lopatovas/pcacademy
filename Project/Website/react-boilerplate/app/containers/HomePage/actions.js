import { SET_FIXTURES } from './constants';

export function setFixtures(fixtures) {
  return {
    type: SET_FIXTURES,
    fixtures,
  };
}
