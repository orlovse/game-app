import {
  FETCH_GAME_DETAILS,
  REQUEST,
  SUCCESS,
  FAILURE,
  FETCH_GAME_SCREENSHOT,
} from "../constants";

const initialState = {
  gameDetails: {},
  screenshots: {},
  loadingDetails: false,
  loadingScreenshots: false,
  errorDetails: null,
  errorScreenshots: null,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DETAILS + REQUEST:
      return {
        ...state,
        loadingDetails: true,
        errorDetails: null,
      };
    case FETCH_GAME_DETAILS + SUCCESS:
      return {
        ...state,
        loadingDetails: false,
        gameDetails: action.payload,
      };
    case FETCH_GAME_DETAILS + FAILURE:
      return {
        ...state,
        errorDetails: action.error,
      };
    case FETCH_GAME_SCREENSHOT + REQUEST:
      return {
        ...state,
        loadingScreenshots: true,
        errorScreenshots: null,
      };
    case FETCH_GAME_SCREENSHOT + SUCCESS:
      return {
        ...state,
        loadingScreenshots: false,
        screenshots: action.payload,
      };
    case FETCH_GAME_SCREENSHOT + FAILURE:
      return {
        ...state,
        errorScreenshots: action.error,
      };
    default:
      return state;
  }
};
