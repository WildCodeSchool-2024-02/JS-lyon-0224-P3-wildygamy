import { useLoaderData, Link } from "react-router-dom";

import styles from "./GamePage.module.css";

export default function MainPage() {
  const games = useLoaderData();

  return (
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
        </li>
      ))}
    </div>
  );
}
