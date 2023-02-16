import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { details } from "../../Redux/actions";
import img from "../../img/dog.png";
import { Link } from "react-router-dom";

export default function Details() {
  const dispatch = useDispatch();
  const { detailID } = useParams();
  const race = useSelector((s) => s.dogDetails);

  useEffect(() => {
    dispatch(details(detailID));
  }, [detailID]);
  return (
    <div className={styles.box}>
      <div className={styles.button}>
      <Link to="/home">
        <button>🡰</button>
      </Link>

      </div>
      <h1>{race.name} details</h1>
      <hr />
      <div className={styles.container}>
        <div className={styles.texto}>
          <h2>Temperaments: {race.temperament}</h2>
          <h2>Weight: {race.weight} kg</h2>
          <h2>Height: {race.height} cm</h2>
          <h2>Life span: {race.life_span}</h2>
        </div>
        <img
          className={styles.img}
          src={race.image ? race.image : img}
          alt={race.id}
        ></img>
      </div>
      <hr></hr>
    </div>
  );
}
