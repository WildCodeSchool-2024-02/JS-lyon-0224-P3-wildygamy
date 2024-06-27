import { Form } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/icones/logo.png";
import styles from "./ConnectionPage.module.css";

export default function ConnectionPage() {
  const ApiUrl = import.meta.env.VITE_API_URL;

  const [loginInfos, setLoginInfos] = useState({
    username: "",
    password: "",
  });

  const handleLoginInfos = (e) => {
    setLoginInfos({ ...loginInfos, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ApiUrl}/api/user/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfos),
      });

      if (response.status === 200) {
        const user = await response.json();
        console.info(user);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className={styles.backgroundconnectionPage}>
      <div className={styles.connectionCard}>
        <img
          className={styles.logoconnection}
          src={Logo}
          alt="logo wildy gamy"
        />
        <h3>Connexion</h3>
        <Form method="post" className={styles.formconnection}>
          <label htmlFor="username">Pseudonyme</label>
          <input
            placeholder="Zelda55"
            type="text"
            id="username"
            name="username"
            value={loginInfos.username}
            onChange={handleLoginInfos}
            aria-label="Entrer pseudonyme"
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginInfos.password}
            onChange={handleLoginInfos}
            aria-label="Entrer mot de passe"
          />
          <button
            onClick={handleLogin}
            className={styles.buttonconnection}
            type="submit"
            aria-label="Connexion"
          >
            Connexion
          </button>
          <button
            className={styles.buttonCreateProfil}
            type="button"
            aria-label="Créer un profil"
          >
            Créer un compte
          </button>
        </Form>
        <h4>Mot de passe oublié</h4>
      </div>
    </div>
  );
}
