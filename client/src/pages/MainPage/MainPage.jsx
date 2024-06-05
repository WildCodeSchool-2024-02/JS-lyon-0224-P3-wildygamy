
import styles from "./MainPage.module.css";
import Challenge from "../../components/Challenge/Challenge"
import CarrousselsJeux from "../../components/CarrousselsJeux/CarrousselsJeux"

export default function MainPage() {
  return (
    <div className={styles.containermainpage}>
     <Challenge/>
     <CarrousselsJeux/>
    </div>
  );
}
