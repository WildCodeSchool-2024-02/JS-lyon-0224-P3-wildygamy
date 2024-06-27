import { Link } from "react-router-dom";
import Logo from "../../assets/icones/logo.png";
import styles from "./HomePageStyle.module.css";

export default function HomePage() {
  return (
    <div className={styles.containerhomepage}>
      <img className={styles.image} src={Logo} alt="logo wildygamy" />
      <Link to="/games">
        <button type="button" className={styles.button}>
          Entrer
        </button>
      </Link>
      <Link to="/connection" className={styles.connect}>
        Se connecter
      </Link>
    </div>
  );
}
