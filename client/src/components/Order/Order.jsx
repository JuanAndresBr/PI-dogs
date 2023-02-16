import styles from "./Order.module.css";


export default function Order(props) {
  const {orders}= props
  function handleClick(e) {
    e.preventDefault()
    orders(e.target.name, e.target.value)
  }
  return (
    <div className={styles.container}>
      <h2>Order by</h2>
      <hr/>
      <span>Alphabetically</span>
      <select name="Alphabetic" onClick={handleClick} defaultValue={"DEFAULT"}>
        <option disabled value={"DEFAULT"}>
          Select order
        </option>
        <option value="Ascendent">Ascendente</option>
        <option value="Descendent">Descendente</option>
      </select>
      <span>In weight order</span>
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
