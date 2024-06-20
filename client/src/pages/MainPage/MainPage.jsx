import { useLoaderData } from "react-router-dom";

import styles from "./MainPage.module.css";
import Challenge from "../../components/Challenge/Challenge";
import CarrousselGames from "../../components/CarrousselGames/CarrousselGames";

export default function MainPage() {
  const games = useLoaderData();

  const challengeGame = games.filter((game) => game.is_challenge === 1);
  return (
    <div className={styles.containermainpage}>
      <Challenge game={challengeGame} />
      <CarrousselGames games={games} />
    </div>
  );
}
