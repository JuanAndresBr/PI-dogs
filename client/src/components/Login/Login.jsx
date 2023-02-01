import styles from "./Login.module.css";
import logo from "../../img/dog.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Henry Dogs</h1>
      <img src={logo} className={styles.logo} alt="logo" />
      <Link className={styles.home} to="/home">
        <p >HOME</p>
      </Link>
    </div>
  );
}
