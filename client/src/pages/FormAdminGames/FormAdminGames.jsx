import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./FormAdminGames.module.css";

function FormAdminGames() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  /* State to know if we are adding a game or editing one */
  const [editMode] = useState(id !== undefined);

  const [gameForm, setGameForm] = useState({
    name: "",
    category: "",
    challenge: "",
    popular: "",
    image: "",
    synopsis: "",
    id,
  });

  /* useEffet to get the data from a game if we wish to edit one */
  useEffect(() => {
    if (editMode === true) {
      fetch(`${ApiUrl}/api/games/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setGameForm({
            name: data.name,
            category: data.category,
            challenge: data.is_challenge,
            popular: data.is_popular,
            image: data.image,
            synopsis: data.synopsis,
            id,
          });
        });
    }
  }, [ApiUrl, editMode, id]);

  const handleUpdateForm = (e) => {
    // Extract the name and the value from the input of the form that triggered the event
    const { name, value } = e.target;

    // Update the status of the form
    setGameForm((prevForm) => {
      // Create a new object with all the actual properties of gameForm
      const updatedForm = { ...prevForm };
      if (e.target.type === "checkbox") {
        if (e.target.checked === true) {
          updatedForm[name] = 1;
        } else {
          updatedForm[name] = 0;
        }
      } else {
        updatedForm[name] = value;
      }

      // Retourner l'objet mis à jour pour mettre à jour l'état
      return updatedForm;
    });
  };

  /* Function to send the data that need to be added or edited */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${ApiUrl}/api/games/${editMode === true ? "edit" : "add"}`,
        {
          method: editMode === true ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(gameForm),
        }
      );
      if (response.status === 200) {
        navigate(`/games/${id}`);
      } else if (response.status === 201) {
        const { insertId } = await response.json();
        navigate(`/games/${insertId}`);
      } else {
        console.info("l'opération a échoué");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles["form-container"]}>
      <form className={styles.formAdmin}>
        <label htmlFor="name">Nom du jeu</label>
        <input
          type="text"
          id="name"
          name="name"
          value={gameForm.name}
          onChange={handleUpdateForm}
        />

        <label htmlFor="category">Catégorie</label>
        <input
          type="text"
          id="category"
          name="category"
          value={gameForm.category}
          onChange={handleUpdateForm}
        />

        <div className={styles["checkbox-container"]}>
          <label htmlFor="challenge">Challenge</label>
          <input
            type="checkbox"
            id="challenge"
            name="challenge"
            checked={gameForm.challenge === 1 ? "checked" : null}
            onChange={handleUpdateForm}
          />
        </div>

        <div className={styles["checkbox-container"]}>
          <label htmlFor="popular">Populaire</label>
          <input
            type="checkbox"
            id="popular"
            name="popular"
            checked={gameForm.popular === 1 ? "checked" : null}
            onChange={handleUpdateForm}
          />
        </div>

        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={gameForm.image}
          onChange={handleUpdateForm}
        />

        <label htmlFor="synopsis">Synopsis</label>
        <input
          type="text"
          id="synopsis"
          name="synopsis"
          value={gameForm.synopsis}
          onChange={handleUpdateForm}
        />

        <button type="submit" onClick={handleSubmit}>
          {editMode === false ? "Ajouter" : "Modifier"}
        </button>
      </form>
    </div>
  );
}

export default FormAdminGames;
