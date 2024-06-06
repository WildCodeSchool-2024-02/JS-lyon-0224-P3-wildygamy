import { useLoaderData, useParams } from "react-router-dom"

import styles from "./DetailPage.module.css"


export default function DetailPage(){
  const games = useLoaderData()
  const {id} = useParams()
  
  const selectGame = games.filter((game) => parseInt(game.id, 10) === parseInt(id , 10))
  return (
    <div className={styles.containerDetail}>
        <h2>{selectGame[0].name}</h2>
        <img alt={selectGame[0].name} className={styles.imgDetail} src={selectGame[0].image}/>
        <p>{selectGame[0].synopsis}</p>
    </div>
  )
}