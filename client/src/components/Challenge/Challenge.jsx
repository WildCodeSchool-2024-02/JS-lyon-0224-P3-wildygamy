import Styles from "./Challenge.module.css";
import { ImgChallenge } from "../../assets/images/challenge.jpg";
import { Play } from "../../assets/icones/play.png";

export default function Challenge() {
  return (
    <>
      <h2>Challenge : PAC MAN</h2>
      <div className={Styles.challenge}>
        <img
          className={Styles.challengeImg}
          src={ImgChallenge}
          alt="jeu challange"
        />
        <img className={Styles.playIcon} src={Play} alt="icone play" />
      </div>
    </>
  );
}
