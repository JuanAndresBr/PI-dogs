import styles from "./Nav.module.css";
import dog from "../../img/3QSp.gif";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const { allDogs } = props;
  return (
    <div className={styles.container}>
      <Link to="home" onClick={allDogs}>
        <div className={styles.containerTitle}>
          <img height="90px" src={dog} alt="gif"></img>
          <h1 className={styles.title}>DOGS</h1>
        </div>
      </Link>
      <Link to="/create">
        <button className={styles.button}>Create</button>
      </Link>
    </div>
  );
}
