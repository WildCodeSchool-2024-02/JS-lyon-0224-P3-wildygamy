import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CarrousselGames.module.css";

export default function CarrousselJeux({ games }) {

  /* Creating a variable to store the popular games */
  const popularGames = games.filter((game) => game.is_popular === 1);

  return (
    <>
      <h2>Les Favoris</h2>
      <div className={styles.carroussel}>
        {popularGames.map((game) => (
          <li className={styles.gameItem} key={game.id}>
            <Link to={`/games/${game.id}`}>
              <button type="button" className={styles.buttonGames}>
                Découvrir
              </button>
            </Link>
            <img
              className={styles.imageGames}
              alt={game.name}
              src={game.image}
            />
          </li>
        ))}
      </div>
    </>
  );
}

CarrousselJeux.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      is_popular: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
