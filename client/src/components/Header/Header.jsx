import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
// import profil from "../../assets/icones/profil.png";
import styles from "./Header.module.css";
import { useUserContext } from "../../context/UseContext";

export default function Header() {
  const {logout}= useUserContext();
  const handleLogout = () => {
    logout (false)
  }
  return (
    <div className={styles.containerheader}>
      <Link className={styles.link} to="/games">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.list}>
        <li className={styles.list_lots}>
          <Link className={styles.link} to="/prizes">
            Lots
          </Link>
        </li>
        <li className={styles.list_nosjeux}>
          <Link className={styles.link} to="/allgames">
            Nos jeux
          </Link>
        </li>
        <li className={styles.list_contact}>
          <Link className={styles.link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Link className={styles.link} to="/admin/games/add">
        <button onClick={handleLogout}
        type='button'
         className={styles.profil} > XXXX
        </button>
      </Link>
    </div>
  );
}
