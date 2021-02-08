import { useEffect } from "react";
import { loadGames } from "../redux/actions/gamesActions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Game } from "../components/game";
import { GameDetails } from "../components/gameDetails";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const {
    popularGames,
    newGames,
    upcomingGames,
    popularGamesLoading,
    newGamesLoading,
    upcomingGamesLoading,
  } = useSelector((state) => state.games);
  return (
    <GameList>
      {pathId && <GameDetails />}
      <h2>Upcoming Games</h2>
      {upcomingGamesLoading ? (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => <Game key={item} />)
      ) : (
        <Games>
          {upcomingGames.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
      )}

      <h2>Popular Games</h2>
      {popularGamesLoading ? (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => <Game key={item} />)
      ) : (
        <Games>
          {popularGames.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
      )}

      <h2>New Games</h2>
      {newGamesLoading ? (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => <Game key={item} />)
      ) : (
        <Games>
          {newGames.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
      )}
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
