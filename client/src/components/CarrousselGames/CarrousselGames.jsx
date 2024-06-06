import Jeu1 from "../../assets/images/jeu1.jpeg";
import Jeu2 from "../../assets/images/jeu2.jpeg";
import Jeu3 from "../../assets/images/jeu3.jpeg";
import styles from "./CarrousselGames.module.css";

export default function CarrousselJeux() {
  return (
    <>
      <h2> Le top 3</h2>
      <div className={styles.carroussel}>
        <div className={styles.jeu}>
          <img src={Jeu1} alt="jeu 1" />
          <button className={styles.buttonDiscover} type="button">
            Découvrir
          </button>
        </div>
        <div className={styles.jeu}>
          <img src={Jeu2} alt="jeu 2" />
          <button className={styles.buttonDiscover} type="button">
            Découvrir
          </button>
        </div>
        <div className={styles.jeu}>
          <img src={Jeu3} alt="jeu 3" />
          <button className={styles.buttonDiscover} type="button">
            Découvrir
          </button>
        </div>
      </div>
    </>
  );
}
