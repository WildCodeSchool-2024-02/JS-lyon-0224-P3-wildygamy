
import styles from "./MainPage.module.css";
import Challenge from "../../components/Challenge/Challenge"
import CarrousselGames from "../../components/CarrousselGames/CarrousselGames"

export default function MainPage() {
  return (
    <div className={styles.containermainpage}>
     <Challenge />
     <CarrousselGames />
    </div>
  );
}
