import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
import styles from "./Header.module.css";
import { useUserContext } from "../../context/UseContext";
import Login from "../../assets/icones/login.png"
import Cancel from "../../assets/icones/cancel.png"

export default function Header() {
  const { logout } = useUserContext();
  const handleLogout = () => {
    logout(false);
  };
  const { user } = useUserContext();
  const userIsLogged = user !== null;
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
        {userIsLogged === true ? (
          <button
            onClick={handleLogout}
            type="button"
            className={styles.profil}
          >
            <img className={styles.cancelIcon} src={Cancel} alt="icone cancel" />
          </button>
        ) : (
          <Link to="/connection">
            <button
              type="button"
              className={styles.profil}
            >
              <img className={styles.loginIcon} src={Login} alt="icone login" />
            </button>
          </Link>
        )}
      </Link>
    </div>
  );
}
