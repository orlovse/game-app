import { lastYearDate, currentDate } from "../utils";
import axios from "axios";

const BASE_URL = "https://api.rawg.io/api/";
const POPULAR_GAMES = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesURL = `${BASE_URL}${POPULAR_GAMES}`;

export const loadPopularGamesAPI = () => {
  return axios.get(popularGamesURL);
};
