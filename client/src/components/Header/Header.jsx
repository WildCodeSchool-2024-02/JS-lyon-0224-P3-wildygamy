import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
import profil from "../../assets/icones/profil.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.containerheader}>
      <Link className={styles.link} to="/">
      <img src={logo} alt="" className={styles.logo} />
      </Link>
      <ul className={styles.list}>
        <li className={styles.list_lots}>
          <Link className={styles.link} to="/prizes">
            Lots
          </Link>
        </li>
        <li className={styles.list_nosjeux}>
          <Link className={styles.link} to="/games">
            Nos jeux
          </Link>
        </li>
      </ul>
      <Link className={styles.link} to="/admin/games">
      <img src={profil} alt="" className={styles.profil} />
      </Link>
    </div>
  );
}
