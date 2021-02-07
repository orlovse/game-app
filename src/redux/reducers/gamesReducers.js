import {
  FETCH_POPULAR_GAMES,
  FETCH_NEW_GAMES,
  FETCH_UPCOMING_GAMES,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../constants";
const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  popularGamesLoading: false,
  newGamesLoading: false,
  upcomingGamesLoading: false,
  popularGamesError: null,
  newGamesError: null,
  upcomingGamesError: null,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_GAMES + REQUEST:
      return {
        ...state,
        popularGamesLoading: true,
        popularGamesError: null,
      };
    case FETCH_POPULAR_GAMES + SUCCESS:
      return {
        ...state,
        popularGames: action.payload.data.results,
        popularGamesLoading: false,
      };
    case FETCH_POPULAR_GAMES + FAILURE:
      return {
        ...state,
        popularGamesError: action.popularGamesError,
        loading: false,
      };

    case FETCH_NEW_GAMES + REQUEST:
      return { ...state, newGamesLoading: true, newGamesError: null };
    case FETCH_NEW_GAMES + SUCCESS:
      return {
        ...state,
        newGames: action.payload.newGamesData,
        newGamesLoading: false,
      };
    case FETCH_NEW_GAMES + FAILURE:
      return {
        ...state,
        newGamesError: action.newGamesError,
        loading: false,
      };

    case FETCH_UPCOMING_GAMES + REQUEST:
      return { ...state, upcomingGamesLoading: true, upcomingGamesError: null };
    case FETCH_UPCOMING_GAMES + SUCCESS:
      return {
        ...state,
        upcomingGames: action.payload.upcomingGamesData,
        upcomingGamesLoading: false,
      };
    case FETCH_UPCOMING_GAMES + FAILURE:
      return {
        ...state,
        upcomingGamesError: action.upcomingGamesError,
        loading: false,
      };

    default:
      return state;
  }
};
