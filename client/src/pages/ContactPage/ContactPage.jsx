import styles from "./ContactPage.module.css";
import Arcade from "../../assets/images/salle-d-arcade.jpg";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <img src={Arcade} alt="Salle d'arcade" />
      </div>
      <div className={styles.info}>
        <div>
          <h3>Adresse</h3>
          <p>267 Rue des Joueurs, 59100 Roubaix, France</p>
        </div>
        <div>
          <h3>Téléphone</h3>
          <p>+33 1 23 45 67 89</p>
        </div>
        <div>
          <h3>Horaires d'ouverture</h3>
          <p>Lundi - Vendredi : 10h00 - 22h00</p>
          <p>Samedi : 10H00 - 00H00</p>
          <p>Dimanche : 12H00 - 20H00</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
