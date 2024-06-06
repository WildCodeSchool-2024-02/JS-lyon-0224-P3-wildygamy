import Logo from "../../assets/icones/logo.png";
import styles from "./HomePageStyle.module.css";

export default function HomePage() {
  return (
    <div className={styles.containerhomepage}>
      <img className={styles.image} src={Logo} alt="logo wildygamy" />
      <button type="button" className={styles.button}>
        Entrer
      </button>
      <p className={styles.connect}>Se connecter</p>
    </div>
  );
}
