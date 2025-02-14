// reducer.js
import { ADD_SCORE, DELETE_SCORE, GET_POPULAR_PLAYER} from './actionTypes';

const initialState = {
  players: [],
  scores: [],
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        scores: [...state.scores, action.payload], // Add new score
      };
    case DELETE_SCORE:
      return {
        ...state,
        scores: state.scores.filter((score) => score.id !== action.payload), // Remove score by id
      };
    case GET_POPULAR_PLAYER:
      return {
        ...state,
        players: action.payload,  // Store the fetched players in state
        error: null,  // Clear any previous errors
      };

    default:
      return state;
  }
};

export default reducer;




   