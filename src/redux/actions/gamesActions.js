import {
  FETCH_POPULAR_GAMES,
  FETCH_NEW_GAMES,
  FETCH_UPCOMING_GAMES,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../constants";
import { loadPopularGamesAPI } from "../api";

export const loadGames = () => async (dispatch) => {
  // const state = getState()
  // const loadingPopularGames = state.loadingPopularGames
  // if(loadingPopularGames) return
  dispatch({ type: FETCH_POPULAR_GAMES + REQUEST });
  try {
    const popularGamesData = await loadPopularGamesAPI();
    dispatch({
      type: FETCH_POPULAR_GAMES + SUCCESS,
      payload: popularGamesData,
    });
  } catch (error) {
    dispatch({ type: FETCH_POPULAR_GAMES + FAILURE, popularGamesError: error });
  }
};
