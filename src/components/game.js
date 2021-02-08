import styled from "styled-components";
import { motion } from "framer-motion";

export const Game = ({ game }) => {
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
    <StyledGame>
      {header}
      {date}
      {img}
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
