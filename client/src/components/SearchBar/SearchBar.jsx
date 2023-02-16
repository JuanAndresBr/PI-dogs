import styles from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const { onSearch, paginate } = props;
  const [race, setRace] = useState("");
  const handleInputChange = (e) => {
    setRace(e.target.value);
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(race);
          setRace("");
          paginate(1);
        }}
      >
        <input
          className={styles.search}
          type="search"
          onChange={handleInputChange}
          value={race}
          name="race"
        ></input>
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
