import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CarrousselGames.module.css";

export default function CarrousselJeux({ games }) {
  const popularGames = games.filter((game) => game.is_popular);

  return (
    <>
      <h2>Nos Jeux</h2>
      <div className={styles.carroussel}>
        {popularGames.map((game) => (
          <li className={styles.gameItem} key={game.id}>
            <img
              className={styles.imageGames}
              alt={game.name}
              src={game.image}
            />
            <Link to={`/games/${game.id}`}>
              <button type="button" className={styles.buttonGames}>
                Découvrir
              </button>
            </Link>
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
      is_popular: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
