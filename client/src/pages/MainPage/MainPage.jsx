import { useLoaderData } from "react-router-dom";

import styles from "./MainPage.module.css";
import Challenge from "../../components/Challenge/Challenge"
import CarrousselsJeux from "../../components/CarrousselsJeux/CarrousselsJeux"


export default function MainPage() {
  const games = useLoaderData();

  const challengeGame = games.filter((game) => game.is_challenge === 1)
  return (
    <div className={styles.containermainpage}>
     <Challenge game={challengeGame}/>
     <CarrousselsJeux games={games}/>
    </div>
  );
}
