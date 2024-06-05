import ChallengeImg from "../../assets/images/challenge.jpg"
import Play from "../../assets/icones/play.png"
import Styles from "./Challenge.module.css";

export default function Challenge() {
  return (
    <>
      <h2>Challenge : PAC MAN</h2>
      <div className={Styles.challenge}>
        <img
          className={Styles.challengeImg}
          src={ChallengeImg}
          alt="jeu challenge"
        />
        <img className={Styles.playIcon} src={Play} alt="icone play" />
      </div>
    </>
  );
}
