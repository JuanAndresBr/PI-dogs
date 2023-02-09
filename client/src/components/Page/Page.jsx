import styles from "./Page.module.css";
import Card from "../Card/Card";
import img from "../../img/51LJ.gif"
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
              weight={dog.weight.imperial ?dog.weight.imperial: dog.weight}
            />
          
        );
      })}
    </div>
  );
}
