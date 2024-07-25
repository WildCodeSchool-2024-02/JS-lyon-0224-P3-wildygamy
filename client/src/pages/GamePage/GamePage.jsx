import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import styles from "./GamePage.module.css";
import { useUserContext } from "../../context/UseContext";

export default function MainPage() {
  const [games, setGames] = useState([]);
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [refreshData, setRefreshData] = useState(false);
  const handleRefresh = () => {
    setRefreshData(!refreshData);
  };
  const notifyFail = (text) => toast.error(text);
  const notifySucess = (text) => toast.success(text);
  const { user } = useUserContext();
  const userIsAdmin = user?.role === "admin";

  const fetchGames = () => {
    fetch(`${ApiUrl}/api/games`)
      .then((response) => response.json())
      .then((data) => setGames(data));
  };

  useEffect(() => {
    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshData]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${ApiUrl}/api/games/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id }),
      });
      if (response.status === 200) {
        notifySucess("Le jeu a été delete", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        notifyFail("Le jeu n'a pas été effacé", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      handleRefresh(); // to refresh the data when the news has been deleted
    } catch (err) {
      console.error(err);
    }
  };

  return (

      <div className={styles.mainGamePage}>
        {userIsAdmin === true && (
        <Link to="/admin/games/add">
            <button type="button" className={styles.buttonAdd}>
              AJOUTER
            </button>
          </Link>
        )}
      <div className={styles.containergamepage}>
          {games.map((game) => (
            <li className={styles.gameItem} key={game.id}>
              <p>{game.name}</p>
              <Link to={`/games/${game.id}`}>
                <img
                  className={styles.imageGames}
                  alt={game.name}
                  src={game.image}
                />
              </Link>
              {userIsAdmin === true && (
              <Link to={`/admin/games/edit/${game.id}`}>
                  <button type="button" className={styles.buttonEdit}>
                    MODIFIER
                  </button>
                </Link>
              )}
            {userIsAdmin === true && (
              <button
                  type="button"
                  onClick={() => handleDelete(game.id)}
                  className={styles.buttonDelete}
                >
                  SUPPRIMER
                </button>
              )}
          </li>
          ))}
        </div>
      </div>

  );
}
