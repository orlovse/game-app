import { FETCH_GAME_DETAILS, REQUEST, SUCCESS, FAILURE } from "../constants";

const initialState = {
  gameDetails: {},
  loading: false,
  error: null,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DETAILS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GAME_DETAILS + SUCCESS:
      return {
        ...state,
        loading: false,
        gameDetails: action.payload,
      };
    case FETCH_GAME_DETAILS + FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
