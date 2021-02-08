import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { detailReducer } from "./detailReducer";

export default combineReducers({ games: gamesReducer, details: detailReducer });
