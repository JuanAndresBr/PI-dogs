import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import img from "../../img/dog.png"

export default function Card(props) {
  const { id,name, image, temperament, weight} = props;
  return (
    <div className={styles.container}>
      <Link className={styles.card} to={`/details/${id}`}>
        <h1>{name}</h1>
        <img className={styles.img} src={image ? image.url : img} alt={name}></img>
        <h2>{temperament}</h2>
        <h2>Weight: {weight}</h2>
      </Link>
    </div>
  );
}
