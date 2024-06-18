import Logo from "../../assets/icones/logo.png";

import styles from "./ConnexionPage.module.css";

export default function ConnexionPage() {
  return (
 <>
      <img className={styles.logoConnexion} src={Logo} alt="logo wildy gamy"/>
      <div className={styles.connexionCard}>
      <p>Hello World</p>

      </div>

 </>

  );
}
