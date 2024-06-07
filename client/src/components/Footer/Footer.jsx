import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <ul className={styles.list}>
        <li className={styles.list_apropos}>
          <Link className={styles.link} to="/">
            A propos
          </Link>
        </li>
        <li className={styles.list_Nouscontacter}>
          <Link className={styles.link} to="/">
            Nous contacter
          </Link>
        </li>
      </ul>
      <p className={styles.footerText}>Copyright (c) 2024 wildygamy</p>
    </div>
  );
}
