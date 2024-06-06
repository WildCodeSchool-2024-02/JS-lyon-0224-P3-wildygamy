import PropTypes from "prop-types";
import styles from "./CarrousselGames.module.css";

export default function CarrousselJeux({games}) {
  return (
    <>
      <h2>Nos Jeux</h2>
      <div className={styles.carroussel}>
        {games.map((game) => (
           <li className="game-item" key={game.id}>
            <img alt={game.name} src={game.image}/>
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
    }).isRequired
  ).isRequired
};
