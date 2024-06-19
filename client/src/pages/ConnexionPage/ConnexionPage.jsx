import { Form } from "react-router-dom";

import Logo from "../../assets/icones/logo.png";

import styles from "./ConnexionPage.module.css";

export default function ConnexionPage() {
  return (
    <div className={styles.connexionCard}>
      <img className={styles.logoConnexion} src={Logo} alt="logo wildy gamy" />
      <h3>Connexion</h3>

      <Form method="post">
        <label htmlFor="name">Pseudonyme ou Mail</label>{" "}
        <input type="text" id="pseudoname" name="pseudoname" />
        <label htmlFor="name">Mot de passe</label>{" "}
        <input type="text" id="password" name="password" />
        <button type="submit">Connexion</button>
        <button className={styles.buttonConnexion} type="submit">
          Créer un compte
        </button>
      </Form>
      <h4>Mot de passe oublié</h4>
    </div>
  );
}
