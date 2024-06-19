import styles from "./FormAdminGames.module.css";

function FormAdminGames() {
  const action = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles["form-container"]}>
      <form method="post" onSubmit={action}>
        <label htmlFor="GameName">Nom du jeu</label>
        <input type="text" id="GameName" name="GameName" />

        <label htmlFor="CategoryName">Catégorie</label>
        <input type="text" id="CategoryName" name="CategoryName" />

        <div className={styles["checkbox-container"]}>
          <label htmlFor="ChallengeName">is_challenge</label>
          <input type="checkbox" id="ChallengeName" name="ChallengeName" />
        </div>

        <div className={styles["checkbox-container"]}>
          <label htmlFor="PopularName">is_popular</label>
          <input type="checkbox" id="PopularName" name="PopularName" />
        </div>

        <label htmlFor="ImageName">Image</label>
        <input type="text" id="ImageName" name="ImageName" />

        <label htmlFor="SynopsisName">Synopsis</label>
        <input type="text" id="SynopsisName" name="SynopsisName" />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default FormAdminGames;
