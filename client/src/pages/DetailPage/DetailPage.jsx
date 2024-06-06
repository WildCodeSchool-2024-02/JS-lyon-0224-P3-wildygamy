import { useLoaderData, useParams } from "react-router-dom"

import styles from "./DetailPage.module.css"


export default function DetailPage(){
  const games = useLoaderData()
  const {id} = useParams()
  
  const selectGame = games.filter((game) => parseInt(game.id, 10) === parseInt(id , 10))
  return (
    <div className={styles.containerDetail}>
        <h2>{selectGame.name}</h2>
        <image alt={selectGame.name} src={selectGame.image}/>
        <p>{selectGame.synopsis}</p>
    </div>
  )
}