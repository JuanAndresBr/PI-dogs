import styles from "./Card.module.css";

export default function About(props) {
  const {name, image, temperament, weight}=props
  return <div className={styles.container}>
    <h1>{name}</h1>
    <h2>{temperament}</h2>
    <h2>{weight}</h2>
    <img className={styles.img} src={image?.url} alt={name}></img>
  </div>;
}
