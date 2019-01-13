import { GET_INPUTS } from './constants';

export function getInputs(inputs) {
  return {
    type: GET_INPUTS,
    inputs,
  };
}
