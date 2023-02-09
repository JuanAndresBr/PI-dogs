import styles from "./Filters.module.css";


export default function Filters(props) {
  const {filters}= props
  function handleClick(e) {
    e.preventDefault()
    filters(e.target.name, e.target.value)
  }
  return (
    <div className={styles.container}>
      <span>Alfabeticamente</span>
      <select name="Alphabetic" onClick={handleClick} defaultValue={"DEFAULT"}>
        <option disabled value={"DEFAULT"}>
          Select order
        </option>
        <option value="Ascendent">Ascendente</option>
        <option value="Descendent">Descendente</option>
      </select>
      <span>Peso</span>
      <select name="Weight" onClick={handleClick} defaultValue={"DEFAULT"}>
        <option disabled value={"DEFAULT"}>
          Select order
        </option>
        <option value="Ascendent">Ascendente</option>
        <option value="Descendent">Descendente</option>
      </select>
    </div>
  );
}
