import styles from "./HomePageStyle.module.css";



export default function HomePage(){

    return(
        <div className={styles.containerhomepage}>
            <img className={styles.image}src="/" alt="logo wildygamy"/>
            <h1 className={styles.title}>Bienvenu dans notre salle d'arcade!</h1>
            <button type="button" className={styles.button} >Entrer</button>
        </div>
    )
}

