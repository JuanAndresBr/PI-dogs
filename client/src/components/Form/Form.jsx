import styles from "./Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <span>Name</span>
      <input className={styles.items} type="text" placeholder="Type name" />
      <div className={styles.contenedor}>
        <span>Height</span>
        <div className={styles.box}>
          <input
            className={styles.number}
            type="number"
            placeholder="MIN"
            min="1"
          />
          <input
            className={styles.number}
            type="number"
            min="1"
            placeholder="MAX"
          />
        </div>
        <span>Weight</span>
        <div className={styles.box}>
          <input
            className={styles.number}
            type="number"
            placeholder="MIN"
            min="1"
          />
          <input
            className={styles.number}
            type="number"
            placeholder="MAX"
            min="1"
          />
        </div>
        <span>Life span</span>
        <div className={styles.box}>
          <input
            className={styles.number}
            type="number"
            placeholder="MIN"
            min="1"
          />
          <input
            className={styles.number}
            type="number"
            placeholder="MAX"
            min="1"
          />
        </div>
      </div>
      <span>Temperament</span>
      <input
        className={styles.items}
        type="text"
        placeholder="Type temperament"
      />

      <button className={styles.button} type="submit">
        <a className={styles.link} href="#">
          Create race
        </a>
      </button>
    </form>
  );
}
