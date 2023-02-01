import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import dog from "../../img/3QSp.gif";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Link to="home">
      <div className={styles.containerTitle}>
        <img height="90px" src={dog} alt="gif"></img>
        <h1 className={styles.title}>DOGS</h1>
      </div>
      </Link>
      <Link to="/create">
        <button className={styles.button}>
          <a className={styles.link} href="#">
            Create
          </a>
        </button>
      </Link>
    </div>
  );
}
