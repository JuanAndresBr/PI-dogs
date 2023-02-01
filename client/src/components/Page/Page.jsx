import styles from "./Page.module.css";
import Card from "../Card/Card";
export default function Page({ dogs, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.container}>
      {dogs.map((dog) => {
        return (

            <Card
              key={dog?.id}
              name={dog?.name}
              image={dog?.image}
              temperament={dog?.temperament}
              weight={dog.weight.imperial ?dog.weight.imperial: dog.weight}
            />
          
        );
      })}
    </div>
  );
}
