import styles from "./SearchBar.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.search}
          type="search"
          placeholder="Type race"
          // list="options"
          // autoComplete="off"
        ></input>
        <datalist id="options">
          <option>#1</option>
        </datalist>
        <button className={styles.button} type="submit">
        <a className={styles.link} href="#">Search</a>
        </button>
      </form>
    </div>
  );
}
