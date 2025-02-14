import axios from 'axios';
import { ADD_SCORE, DELETE_SCORE, GET_POPULAR_PLAYER } from './actionTypes';

// Action to add a score (Example, you can customize this)
export const addScore = (scoreData) => {
  return {
    type: ADD_SCORE,
    payload: scoreData,
  };
};

// Action to delete a score (Example)
export const deleteScore = (id) => {
  return {
    type: DELETE_SCORE,
    payload: id,
  };
};



export const getPopularPlayer = () => async (dispatch) => {
  try {
    // Fetch player data from API
    const data = await fetchPlayers();

    // Dispatch the success action
    dispatch({
      type: GET_POPULAR_PLAYER,
      payload: data.players,  // Assuming the data contains a 'players' field
    });
  } catch (error) {
    console.error('Error fetching popular players:', error);
  }
};

