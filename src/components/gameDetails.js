import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export const GameDetails = () => {
  const history = useHistory();
  const { gameDetails, screenshots } = useSelector((state) => state.details);
  const exitDetailsHandler = (event) => {
    const element = event.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  if (
    Object.entries(gameDetails).length < 1 ||
    Object.entries(screenshots).length < 1
  )
    return <div></div>;
  return (
    <CardShadow className="shadow" onClick={exitDetailsHandler}>
      <Detail>
        <Stats>
          <div className="rating">
            <h3>{gameDetails.name}</h3>
            <p>Rating: {gameDetails.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {gameDetails.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={gameDetails.background_image} alt="game-image" />
        </Media>
        <Description>
          <p>{gameDetails.description_raw}</p>
        </Description>
        <div className="gallery">
          {screenshots.results.map((screenshot) => (
            <img src={screenshot.image} key={screenshot.id} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
