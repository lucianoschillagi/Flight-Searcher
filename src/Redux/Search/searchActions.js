import { GET_SELECTED_FLIGHT } from './searchTypes';

export const getSelectedFlight = flight => {
  return {
    type: GET_SELECTED_FLIGHT,
    payload: flight
  }
}

// NOTE: "payload" sends additional
// information to the reducer