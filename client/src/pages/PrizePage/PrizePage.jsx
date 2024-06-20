import { useLoaderData } from "react-router-dom";

import styles from "./PrizePage.module.css";

export default function PrizePage() {
  const prizes = useLoaderData();
  const littlePrize = prizes.filter((prize) => prize.points < 400);
  const mediumPrize = prizes.filter(
    (prize) => prize.points > 400 && prize.points < 900
  );
  const bigPrize = prizes.filter(
    (prize) => prize.points > 900 && prize.points < 3000
  );
  const amazingPrize = prizes.filter((prize) => prize.points > 3000);

  return (
    <div className={styles.containerPrize}>
      <div className={styles.sectionPrize}>
        <h2>Lots: de 100 points à 300 points </h2>
        <div className={styles.listPrize}>
          {littlePrize.map((prize) => (
            <li className={styles.PrizeItem} key={prize.id}>
              <img
                className={styles.imagePrize}
                alt={prize.name}
                src={prize.image}
              />
              <p className={styles.PrizeName}>{prize.name}</p>
              <p className={styles.PrizePoints}>{prize.points}</p>
            </li>
          ))}
        </div>
      </div>
      <div className={styles.sectionPrize}>
        <h2>Lots: de 400 points à 1000 points </h2>
        <div className={styles.listPrize}>
          {mediumPrize.map((prize) => (
            <li className={styles.PrizeItem} key={prize.id}>
              <img
                className={styles.imagePrize}
                alt={prize.name}
                src={prize.image}
              />
              <p className={styles.PrizeName}>{prize.name}</p>
              <p className={styles.PrizePoints}>{prize.points}</p>
            </li>
          ))}
        </div>
      </div>
      <div className={styles.sectionPrize}>
        <h2>Lots: de 1000 points à 3000 points </h2>
        <div className={styles.listPrize}>
          {bigPrize.map((prize) => (
            <li className={styles.PrizeItem} key={prize.id}>
              <img
                className={styles.imagePrize}
                alt={prize.name}
                src={prize.image}
              />
              <p className={styles.PrizeName}>{prize.name}</p>
              <p className={styles.PrizePoints}>{prize.points}</p>
            </li>
          ))}
        </div>
      </div>
      <div className={styles.sectionPrize}>
        <h2>Le lot exceptionnel </h2>
        <div className={styles.listPrize}>
          {amazingPrize.map((prize) => (
            <li className={styles.PrizeItem} key={prize.id}>
              <img
                className={styles.imagePrize}
                alt={prize.name}
                src={prize.image}
              />
              <p className={styles.PrizeName}>{prize.name}</p>
              <p className={styles.PrizePoints}>{prize.points}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
