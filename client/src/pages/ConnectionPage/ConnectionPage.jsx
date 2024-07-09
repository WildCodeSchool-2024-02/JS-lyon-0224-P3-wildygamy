import { Form } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types"; 
import Logo from "../../assets/icones/logo.png";
import styles from "./ConnectionPage.module.css";


export default function ConnectionPage({ handleLogin }) {
  const[connectionForm, setConnectionForm] = useState({
    username: "",
    password: ""
  });

  const [formErrors, setFormErrors] = useState ({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setConnectionForm({...connectionForm, [e.target.name] : e.target.value });

  };

  const setError = (name, message) => {
    setFormErrors((previousErrors) => ({
      ...previousErrors,
      [name]: message,
    }));
  };

  // function for sucess
  const setSucess  = (name) => {
    setFormErrors ((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  // function for verificators : pseudoname

  const validPseudo = (username) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(String(username));
  };

    // function for verificators : password

  const validPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(String(password));
  };

  const validInputs = () => {
    const { username, password } = connectionForm;


    
    const fields = [
      
      {
        name: "username",
        value: username, 
        message: "Un pseudo est requis",
        minLength: 2,
        errorMessage:
        "Le pseudonyme ne correspond pas", 
    },

    {
      name: "password",
      value: password,
      message: "Un mot de passe est requis ",
      minLength: 8,
      errorMessage:
      "Le mot de passe ne correspond pas", 
  },
];

    let allValid = true; 

    fields.forEach(
      ({ name, value, message, minLength, errorMessage, match }) => {
        if (value.trim()=== "") {
          setError(name, message);
          allValid = false; 
        } else if (minLength && value.length < minLength) {
          setError(name, errorMessage);
          allValid = false; 
        } else if (name === "username" && !validPseudo(value)) {
          setError(name, message);
          allValid = false; 
        } else if (name === "password" && !validPassword(value)) {
          setError(name, message);
          allValid = false; 
        } else if(match !== undefined && value !==match) {
          setError(name, message);
          allValid = false; 
        } else {
          setSucess(name);
        }
      }
    );
return allValid;
  };



const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    username: connectionForm.username,
    password: connectionForm.password,
  };


  if (validInputs() === true) {
    const result = await handleLogin({ formData });

    if (result.success) {
      window.location.href = "/";
    } else {
      setError("form", result.error);
    }
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
        <h3>connection</h3>

        <Form method="post" className={styles.formconnection}>
          <label htmlFor="username">Pseudonyme ou Mail</label>{" "}
          <input
            placeholder="Zelda55"
            type="text"
            id="username"
            name="username"
            aria-label="Entrer pseudoname ou mail"
            value={connectionForm.username}
            onChange={handleChange}
            required
          />
             {formErrors.username !== "" && (
        <div className="error">{formErrors.username}</div>
      )}

          <label htmlFor="password">Mot de passe</label>{" "}
          <input
            type="password"
            id="password"
            name="password"
            aria-label=" Entrer mot de passe"
            value={connectionForm.password}
            onChange={handleChange}
            required
          />
             {formErrors.password !== "" && (
        <div className="error">{formErrors.password}</div>
      )}
          <button
            className={styles.buttonconnection}
            type="submit"
            aria-label="connection"
            onClick={handleSubmit}
          >
        
            connection
          </button>
          <button
            className={styles.buttonCreateProfil}
            type="submit"
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

ConnectionPage.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};