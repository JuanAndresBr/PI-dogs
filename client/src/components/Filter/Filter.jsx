import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { searchTemperament, searchRace } from "../../Redux/actions";

export default function Order(props) {
  const { filters } = props;
  const dispatch = useDispatch();
  const temperaments = useSelector((s) => s.temperaments);
  const races = useSelector((s) => s.races);
  const [checksTemperaments, setChecksTemperaments] = useState([]);
  const [checksRaces, setChecksRaces] = useState([]);
  // const [searchTemp, setSearchTemp] = useState("");

  function handleSearchTemp(e) {
    dispatch(searchTemperament(e.target.value));
  }
  function handleSearchRace(e) {
    dispatch(searchRace(e.target.value));
  }
  function handleChecksTemperaments(e) {
    var updateList = [...checksTemperaments];
    if (e.target.checked) {
      updateList = [...checksTemperaments, e.target.value];
    } else {
      updateList.splice(checksTemperaments.indexOf(e.target.value), 1);
    }
    setChecksTemperaments(updateList);
    filters("Temperaments", updateList);
  }
  function handleChecksRaces(e) {
    var updateList = [...checksRaces];
    if (e.target.checked) {
      updateList = [...checksRaces, e.target.value];
    } else {
      updateList.splice(checksRaces.indexOf(e.target.value), 1);
    }
    setChecksRaces(updateList);
    filters("Races", updateList);
  }

  return (
    <div className={styles.container}>
      <h2>Filters</h2>
      <hr />
      <span>Temperaments</span>
      <section className={styles.section}>
        <input
          className={styles.searchTemp}
          placeholder="search temperament"
          type="search"
          onChange={handleSearchTemp}
        ></input>
        <section>
          {temperaments.map((e) => {
            if (checksTemperaments.find((t) => t === e.nombre)) {
              return (
                <div>
                  <input
                    onChange={handleChecksTemperaments}
                    value={e.nombre}
                    key={e.id}
                    type="checkbox"
                    checked
                  ></input>
                  <span>{e.nombre}</span>
                </div>
              );
            } else {
              return (
                <div>
                  <input
                    onChange={handleChecksTemperaments}
                    value={e.nombre}
                    key={e.id}
                    type="checkbox"
                  ></input>
                  <span>{e.nombre}</span>
                </div>
              );
            }
          })}
        </section>
      </section>
      <span>Races</span>
      <section className={styles.section}>
        <input
          className={styles.searchTemp}
          placeholder="search race"
          type="search"
          onChange={handleSearchRace}
        />
        <section>
          {races.map((e) => {
            if (checksRaces.find((t) => t === e.name)) {
              return (
                <div>
                  <input
                    key={e.id}
                    type="checkbox"
                    value={e.name}
                    onChange={handleChecksRaces}
                    checked
                  ></input>
                  <span>{e.name}</span>
                </div>
              );
            } else {
              return (
                <div>
                  <input
                    key={e.id}
                    type="checkbox"
                    value={e.name}
                    onChange={handleChecksRaces}
                  ></input>
                  <span>{e.name}</span>
                </div>
              );
            }
          })}
        </section>
      </section>
    </div>
  );
}
