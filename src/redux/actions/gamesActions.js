import {
  FETCH_POPULAR_GAMES,
  FETCH_NEW_GAMES,
  FETCH_UPCOMING_GAMES,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../constants";
import {
  loadPopularGamesAPI,
  loadNewGamesAPI,
  loadUpcomingGamesAPI,
} from "../api";

export const loadGames = () => async (dispatch) => {
  // const state = getState()
  // const loadingPopularGames = state.loadingPopularGames
  // if(loadingPopularGames) return
  dispatch({ type: FETCH_POPULAR_GAMES + REQUEST });
  try {
    const popularGamesData = await loadPopularGamesAPI();
    dispatch({
      type: FETCH_POPULAR_GAMES + SUCCESS,
      payload: popularGamesData.data.results,
    });
  } catch (error) {
    dispatch({ type: FETCH_POPULAR_GAMES + FAILURE, popularGamesError: error });
  }

  dispatch({ type: FETCH_NEW_GAMES + REQUEST });
  try {
    const newGamesData = await loadNewGamesAPI();
    dispatch({
      type: FETCH_NEW_GAMES + SUCCESS,
      payload: newGamesData.data.results,
    });
  } catch (error) {
    dispatch({ type: FETCH_NEW_GAMES + FAILURE, newGamesError: error });
  }

  dispatch({ type: FETCH_UPCOMING_GAMES + REQUEST });
  try {
    const upcomingGamesData = await loadUpcomingGamesAPI();
    dispatch({
      type: FETCH_UPCOMING_GAMES + SUCCESS,
      payload: upcomingGamesData.data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_UPCOMING_GAMES + FAILURE,
      upcomingGamesError: error,
    });
  }
};
