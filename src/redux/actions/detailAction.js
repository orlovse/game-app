import { loadGameDetailsAPI } from "../api";
import { FETCH_GAME_DETAILS, REQUEST, FAILURE, SUCCESS } from "../constants";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({ type: FETCH_GAME_DETAILS + REQUEST });
  try {
    const gameDitails = await loadGameDetailsAPI(id);
    dispatch({ type: FETCH_GAME_DETAILS + SUCCESS, payload: gameDitails.data });
  } catch (error) {
    dispatch({ type: FETCH_GAME_DETAILS + FAILURE, error });
  }
};
