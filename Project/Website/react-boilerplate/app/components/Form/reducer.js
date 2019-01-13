import { fromJS } from 'immutable';
import { GET_INPUTS } from './constants';

const initialState = fromJS({
  inputs: {},
});

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INPUTS:
      return state.set('inputs', action.inputs);
    default:
      return state;
  }
}
