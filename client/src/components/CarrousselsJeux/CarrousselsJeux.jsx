import styles from "./CarrousselsJeux.module.css";

export default function CarrousselJeux() {
  return (
    <>
      <h2> Le top 3</h2>
      <div className={styles.carroussel}>
        <div className={styles.jeu}>
          <img src="client/src/assets/images/jeu1.jpeg" alt="jeu 1" />
          <button className={styles.buttonDiscover} type="button">
            Découvrir
          </button>
        </div>
        <div className={styles.jeu}>
          <img src="client/src/assets/images/jeu2.jpeg" alt="jeu 2" />
          <button className={styles.buttonDiscover} type="button">
            Découvrir
          </button>
        </div>
        <div className={styles.jeu}>
          <img src="client/src/assets/images/jeu3.jpeg" alt="jeu 3" />
          <button className={styles.buttonDiscover} type="button">
            Découvrir
          </button>
        </div>
      </div>
    </>
  );
}
