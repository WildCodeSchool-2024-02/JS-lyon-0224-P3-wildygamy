import { useState, useEffect } from "react";
import Pacman from "react-pacman";
import PropTypes from "prop-types";
import Play from "../../assets/icones/start.png";
import Styles from "./Challenge.module.css";

export default function Challenge({ game }) {
  const [playing, setPlaying] = useState(false);

  const restartGame = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (playing) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [playing]);

  return (
    <div className={Styles.challenge}>
      <h2>Challenge : PAC MAN</h2>
      {playing ? (
        <Pacman onEnd={() => setPlaying(false)} />
      ) : (
        <img
          className={Styles.challengeImg}
          src={game[0].image}
          alt={game[0].name}
        />
      )}
      <button type="button" className={Styles.playButton} onClick={restartGame}>
        <img className={Styles.playIcon} src={Play} alt="icone play" />
      </button>
      <p>{game[0].synopsis}</p>
    </div>
  );
}

Challenge.propTypes = {
  game: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      synopsis: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
