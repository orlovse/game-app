import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailAction";
import { Link } from "react-router-dom";

export const Game = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    if (game) {
      dispatch(loadDetails(game.id));
      document.body.style.overflow = "hidden";
    }
  };

  let header = <div>Header loading</div>;
  let date = <div>Date loading</div>;
  let img = <div>Image loading</div>;

  if (game) {
    const { name, released, background_image } = game;
    header = <h3>{name}</h3>;
    date = <p>{released}</p>;
    img = <img src={background_image} alt={name} />;
  }

  return (
    <StyledGame onClick={loadDetailsHandler}>
      <Link to={`/game/${game?.id}`}>
        {header}
        {date}
        {img}
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
