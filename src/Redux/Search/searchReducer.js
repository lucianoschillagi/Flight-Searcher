import { GET_SELECTED_FLIGHT } from './searchTypes';

// Initial state
const initialState = { 
                      selectedFlight: null
                     }

// Search reducer
const searchReducer = ( state = initialState, 
                        action ) => {
  switch(action.type) {
    case GET_SELECTED_FLIGHT: return {
      ...state,
      selectedFlight: action.payload
    }

    default: return state
  }
}

export default searchReducer;