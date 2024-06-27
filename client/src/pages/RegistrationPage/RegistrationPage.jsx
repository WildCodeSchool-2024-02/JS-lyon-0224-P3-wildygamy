import { useState } from "react";
import { Form } from "react-router-dom";
import PropTypes from "prop-types"; 

export default function RegistrationPage({ handleSignUp }) {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    lastname: "",
    firstname: "",
    mail: "",
    password: "",
    password2: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    lastname: "",
    firstname: "",
    mail: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const setError = (name, message) => {
    setFormErrors((previousErrors) => ({
      ...previousErrors,
      [name]: message,
    }));
  };

  const setSuccess = (name) => {
    setFormErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const validMail = (mail) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(mail).toLowerCase());
  };

  const validFirstname = (firstname) => {
    const regex = /^[A-Z][a-zA-Z]*$/;
    return regex.test(String(firstname));
  };

  const validLastname = (lastname) => {
    const regex = /^[A-Z]*$/;
    return regex.test(String(lastname));
  };

  const validPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(String(password));
  };

  const validInputs = () => {
    const { username, lastname, firstname, mail, password, password2 } =
      registerForm;
    const fields = [
      {
        name: "username",
        value: username,
        message: "Un pseudo est requis",
        minLength: 2,
        errorMessage:
          "Le nom d'utilisateur doit contenir au moins 2 caractères",
      },
      {
        name: "lastname",
        value: lastname,
        message: "Un nom est requis",
        minLength: 3,
        errorMessage:
          "Le nom doit être en majuscule et doit contenir au moins 3 caractères",
      },
      {
        name: "firstname",
        value: firstname,
        message: "Un prénom est requis",
        minLength: 2,
        errorMessage:
          "Le prénom doit commencer par une majuscule et doit contenir au moins 2 caractères",
      },
      {
        name: "mail",
        value: mail,
        message: "Un mail est requis",
        errorMessage: "Veuillez donner un mail valide",
      },
      {
        name: "password",
        value: password,
        message: "Un mot de passe est requis",
        minLength: 8,
        errorMessage:
          "Le mot de passe doit avoir 8 caractères minimum dont au moins une majuscule , un nombre et un caractère spécial",
      },
      {
        name: "password2",
        value: password2,
        message: "Veuillez confirmer votre mot de passe",
        match: password,
        errorMessage: "Le mot de passe doit être le même",
      },
    ];

    let allValid = true;

    fields.forEach(
      ({ name, value, message, errorMessage, minLength, match }) => {
        if (value.trim() === "") {
          setError(name, message);
          allValid = false;
        } else if (minLength && value.length < minLength) {
          setError(name, errorMessage);
          allValid = false;
        } else if (name === "firstname" && !validFirstname(value)) {
          setError(name, errorMessage);
          allValid = false;
        } else if (name === "lastname" && !validLastname(value)) {
          setError(name, errorMessage);
          allValid = false;
        } else if (name === "mail" && !validMail(value)) {
          setError(name, errorMessage);
          allValid = false;
        } else if (name === "password" && !validPassword(value)) {
          setError(name, errorMessage);
          allValid = false;
        } else if (match !== undefined && value !== match) {
          setError(name, errorMessage);
          allValid = false;
        } else {
          setSuccess(name);
        }
      }
    );
    return allValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: registerForm.username,
      lastname: registerForm.lastname,
      firstname: registerForm.firstname,
      mail: registerForm.mail,
      password: registerForm.password,
    };

    if (validInputs() === true) {
      const result = await handleSignUp({ formData });

      if (result.success) {
        window.location.href = "/";
      } else {
        setError("form", result.error);
      }
    }
  };

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <label htmlFor="username">Pseudonyme</label>
      <input
        placeholder="Zelda55"
        type="text"
        id="username"
        name="username"
        aria-label="Entrer un pseudonyme"
        value={registerForm.username}
        onChange={handleChange}
        required
      />
      {formErrors.username !== "" && (
        <div className="error">{formErrors.username}</div>
      )}
      <label htmlFor="lastname">NOM</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={registerForm.lastname}
        onChange={handleChange}
        required
        aria-label=" Entrer votre nom de famille en lettres majuscule"
      />
      {formErrors.lastname !== "" && (
        <div className="error">{formErrors.lastname}</div>
      )}
      <label htmlFor="firstname">Prénom</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={registerForm.firstname}
        onChange={handleChange}
        aria-label=" Entrer votre prénom en commençant par une lettre majuscule"
        required
      />
      {formErrors.firstname !== "" && (
        <div className="error">{formErrors.firstname}</div>
      )}
      <label htmlFor="mail">Mail</label>
      <input
        type="mail"
        id="mail"
        name="mail"
        value={registerForm.mail}
        onChange={handleChange}
        aria-label=" Entrer votre adresse e-mail"
        required
      />
      {formErrors.mail !== "" && <div className="error">{formErrors.mail}</div>}
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        id="password"
        name="password"
        value={registerForm.password}
        onChange={handleChange}
        aria-label=" Entrer un mot de passe"
      />
      {formErrors.password !== "" && (
        <div className="error">{formErrors.password}</div>
      )}
      <label htmlFor="password2">Confirmer votre mot de passe</label>
      <input
        type="password"
        id="password2"
        name="password2"
        value={registerForm.password2}
        onChange={handleChange}
        aria-label=" Entrer un mot de passe"
      />
      {formErrors.password2 !== "" && (
        <div className="error">{formErrors.password2}</div>
      )}
      <button
        type="submit"
        aria-label="Valider votre compte"
        onSubmit={handleSubmit}
      >
        Valider
      </button>
    </Form>
  );
}

RegistrationPage.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
};