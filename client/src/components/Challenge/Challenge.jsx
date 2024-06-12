import PropTypes from "prop-types";
import Play from "../../assets/icones/play.png";
import Styles from "./Challenge.module.css";

export default function Challenge({ game }) {
  return (
    <div className={Styles.challenge}>
      <h2>Challenge : PAC MAN</h2>
      <img
        className={Styles.challengeImg}
        src={game[0].image}
        alt={game[0].name}
      />
      <img className={Styles.playIcon} src={Play} alt="icone play" />
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
