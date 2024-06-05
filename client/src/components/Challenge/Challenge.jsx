import Styles from "./Challenge.module.css";

export default function Challenge() {
  return (
    <>
      <h2>Challenge : PAC MAN</h2>
      <div className={Styles.challenge}>
        <img
          className={Styles.challengeImg}
          src="client/src/assets/images/challenge.jpg"
          alt="jeu challenge"
        />
        <img className={Styles.playIcon} src="client/src/assets/icones/play.png" alt="icone play" />
      </div>
    </>
  );
}
