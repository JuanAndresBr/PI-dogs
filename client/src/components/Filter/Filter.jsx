import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { searchTemperament, searchBreed } from "../../Redux/actions";

export default function Filter(props) {
  const { filters, paginate } = props;
  const dispatch = useDispatch();
  const temperaments = useSelector((s) => s.temperaments);
  const breeds = useSelector((s) => s.breeds);
  const [checksTemperaments, setChecksTemperaments] = useState([]);
  const [checksBreeds, setChecksBreeds] = useState([]);

  function handleSearchTemp(e) {
    dispatch(searchTemperament(e.target.value));
  }

  function handleSearchRace(e) {
    dispatch(searchBreed(e.target.value));
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
    paginate(1)
  }

  function handleChecksBreeds(e) {
    var updateList = [...checksBreeds];
    if (e.target.checked) {
      updateList = [...checksBreeds, e.target.value];
    } else {
      updateList.splice(checksBreeds.indexOf(e.target.value), 1);
    }
    setChecksBreeds(updateList);
    filters("Breeds", updateList);
    paginate(1)
  }

  function handleReset(e) {
    if (e.target.name === "temperament") {
      setChecksTemperaments([]);
      filters("Temperaments", []);
    } else if (e.target.name === "breed") {
      setChecksBreeds([]);
      filters("Breeds", []);
    }
  }

  return (
    <div className={styles.container}>
      
      <h2>Filters</h2>
      <hr />
      <span>Temperaments</span>
      <section className={styles.section}>
        <div>
          <input
            className={styles.searchTemp}
            placeholder="Search temperaments"
            type="search"
            onChange={handleSearchTemp}
          ></input>
          <button className={styles.reset} name={"temperament"} onClick={handleReset}>
            ⭯
          </button>
        </div>
        <section>
          {temperaments.map((e) => {
            if (checksTemperaments.find((t) => t === e.name)) {
              return (
                <div key={e.id}>
                  <input
                    onChange={handleChecksTemperaments}
                    value={e.name}
                    key={e.id}
                    type="checkbox"
                    checked
                  ></input>
                  <span>{e.name}</span>
                </div>
              );
            } else {
              return (
                <div key={e.id}>
                  <input
                    onChange={handleChecksTemperaments}
                    value={e.name}
                    key={e.id}
                    type="checkbox"
                  ></input>
                  <span>{e.name}</span>
                </div>
              );
            }
          })}
        </section>
      </section>
      <span>Breeds</span>
      <section className={styles.section}>
        <div>
          <input
            className={styles.searchTemp}
            placeholder="search breed"
            type="Search"
            onChange={handleSearchRace}
          />
          <button className={styles.reset}  name={"breed"} onClick={handleReset}>
            ⭯
          </button>
        </div>
        <section>
          {breeds.map((e) => {
            if (checksBreeds.find((t) => t === e.name)) {
              return (
                <div key={e.id}>
                  <input
                    key={e.id}
                    type="checkbox"
                    value={e.name}
                    onChange={handleChecksBreeds}
                    checked
                  ></input>
                  <span>{e.name}</span>
                </div>
              );
            } else {
              return (
                <div key={e.id}>
                  <input
                    key={e.id}
                    type="checkbox"
                    value={e.name}
                    onChange={handleChecksBreeds}
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
