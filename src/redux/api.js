import { lastYearDate, currentDate, nextYearDate } from "../utils";
import axios from "axios";

const BASE_URL = "https://api.rawg.io/api/";
const POPULAR_GAMES = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;
const NEW_GAMES = `games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`;
const UPCOMING_GAMES = `games?dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;

export const popularGamesURL = `${BASE_URL}${POPULAR_GAMES}`;
export const newGamesURL = `${BASE_URL}${NEW_GAMES}`;
export const upcomingGamesURL = `${BASE_URL}${UPCOMING_GAMES}`;

export const gameDetailsURL = (gameId) => `${BASE_URL}games/${gameId}`;
export const gameScreenshotURL = (gameId) =>
  `${BASE_URL}games/${gameId}/screenshots`;
export const searchGameURL = (gameName) =>
  `${BASE_URL}games?search=${gameName}&page_size=9`;

export const loadPopularGamesAPI = () => {
  return axios.get(popularGamesURL);
};

export const loadNewGamesAPI = () => {
  return axios.get(newGamesURL);
};

export const loadUpcomingGamesAPI = () => {
  return axios.get(upcomingGamesURL);
};

export const loadGameDetailsAPI = (gameId) => {
  return axios.get(gameDetailsURL(gameId));
};

export const loadGameScreenshotAPI = (gameId) => {
  return axios.get(gameScreenshotURL(gameId));
};

export const loadGameSearchAPI = (gameName) => {
  return axios.get(searchGameURL(gameName));
};
