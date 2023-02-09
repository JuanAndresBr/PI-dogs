import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Details(props) {
  const { detailID } = useParams();
  const [race, setRace] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/dogs/${detailID}`)
      .then((result) => result.data)
      .then((dog) => {
          setRace(dog)
      });
      return setRace({})
  }, [detailID]);
  return (
    <div className={styles.container}>
      <div className={styles.texto}>

      <h1>Name:  {race.name}</h1>
      <h2>Temperaments:  {race.temperament}</h2>
      <h2>Weight:  {race.weight}</h2>
      <h2>Height:  {race.height}</h2>
      <h2>Life span:  {race.life_span}</h2>
      </div>
      <img className={styles.img} src={race.image?.url} alt={race.name}></img>
    </div>
  );
}
