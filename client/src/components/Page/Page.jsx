import styles from "./Page.module.css";
import Card from "../Card/Card";
export default function Page({ dogs}) {

  return (
    <div className={styles.container}>
      {dogs.map((dog) => {
        return (

            <Card
              key={dog?.id}
              id={dog.id}
              name={dog?.name}
              image={dog?.image}
              temperament={dog?.temperament}
              weight={ dog.weight}
            />
          
        );
      })}
    </div>
  );
}
