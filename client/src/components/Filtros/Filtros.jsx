import styles from "./Filtros.module.css";

export default function Filtros() {
  function handleClick(){

  }
  return (
    <div className={styles.container}>
      <span>Alfabeticamente</span>
      <select
      name="order"
      onClick={handleClick}
      defaultValue={"DEFAULT"}>
        <option disabled value={"DEFAULT"}>
          Select order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>  
      </select>
      <span>Peso</span>
      <select
      name="order"
      onClick={handleClick}
      defaultValue={"DEFAULT"}>
        <option disabled value={"DEFAULT"}>
          Select order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>  
      </select>
    </div>
  );
}
