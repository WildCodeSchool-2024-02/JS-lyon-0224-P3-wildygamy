import { Form } from "react-router-dom";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={styles.backgroundRegistration}>
      <div className={styles.cardRegistration}>
        <Form method="post" className={styles.formRegistration}>
          <h3>Créer votre profil</h3>
          <label htmlFor="username">Pseudonyme</label>{" "}
          <input
            placeholder="Zelda55"
            type="text"
            id="username"
            name="username"
            aria-label="Entrer un pseudonyme"
            required
          />
          <label htmlFor="lastname">NOM</label>{" "}
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            aria-label=" Entrer votre nom de famille en lettres majuscule"
          />
          <label htmlFor="lastname">Prénom</label>{" "}
          <input
            type="text"
            id="firstname"
            name="firstname"
            aria-label=" Entrer votre prénom en commençant par une lettre majuscule"
            required
          />
          <label htmlFor="mail">Mail</label>{" "}
          <input
            type="mail"
            id="mail"
            name="mail"
            aria-label=" Entrer votre adresse e-mail"
            required
          />
          <label htmlFor="password">Mot de passe</label>{" "}
          <input
            type="password"
            id="password"
            name="password"
            aria-label=" Entrer un mot de passe"
          />
          <label htmlFor="password">Confirmer votre mot de passe</label>{" "}
          <input
            type="password"
            id="password"
            name="password"
            aria-label=" Entrer un mot de passe"
          />
          <button type="submit" aria-label="Valider votre compte">
            {" "}
            Valider
          </button>
        </Form>
      </div>
    </div>
  );
}
