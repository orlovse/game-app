import { loadGameDetailsAPI, loadGameScreenshotAPI } from "../api";
import {
  FETCH_GAME_DETAILS,
  REQUEST,
  FAILURE,
  SUCCESS,
  FETCH_GAME_SCREENSHOT,
} from "../constants";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({ type: FETCH_GAME_DETAILS + REQUEST });
  try {
    const gameDitails = await loadGameDetailsAPI(id);
    dispatch({ type: FETCH_GAME_DETAILS + SUCCESS, payload: gameDitails.data });
  } catch (error) {
    dispatch({ type: FETCH_GAME_DETAILS + FAILURE, error });
  }

  dispatch({ type: FETCH_GAME_SCREENSHOT + REQUEST });
  try {
    const gameScreenshots = await loadGameScreenshotAPI(id);
    dispatch({
      type: FETCH_GAME_SCREENSHOT + SUCCESS,
      payload: gameScreenshots.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_GAME_SCREENSHOT + FAILURE, error });
  }
};
