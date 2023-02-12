import styles from "./Form.module.css";
import React, { useState, useEffect } from "react";
import { postDog } from "../../Redux/actions";
import { validarInputs, validarTemperaments } from "./validation";
//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//import { getTemperaments } from "../../Redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const temperaments = useSelector((s) => s.allTemperaments);
  const [selects, setSelects] = useState([]);
  const [dogTemperaments, setDogTemperaments] = useState({ values: [] });
  const [dogData, setDogData] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife: "",
    maxLife: "",
  });
  const [errors, setErrors]=useState({
    name: "",
    height: "",
    weight: "",
    life: "",
    selects:""
  })

  function handleTemperaments(e) {
    e.preventDefault();

    setSelects([
      ...selects,
      <select
        onClick={(e) => handleSelectsClick(e)}
        key={selects.length}
        defaultValue={"DEFAULT"}
        name={selects.length}
        className={styles.select}
      >
        <option disabled value="DEFAULT">
          Select temperament
        </option>
        {temperaments.map((e) => (
          <option key={e.id} value={e.id}>
            {e.nombre}
          </option>
        ))}
      </select>,
    ]);
  }

  function handleSelectsClick(e) {
    const all = dogTemperaments.values;
    console.log(e.target.value)
    if (all[e.target.name]) {
      all[e.target.name] = e.target.value;
    } else {
      all.push(e.target.value);
    }
    setDogTemperaments({ values: all });
    setErrors({...errors, selects: validarTemperaments(dogTemperaments.values)})
    console.log(dogTemperaments.values)
  }

  function handleInputChange(e) {
    setDogData({
      ...dogData,
      [e.target.name]: e.target.value,
    });
    setErrors(validarInputs({...dogData, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(Object.keys(validarInputs(dogData)).length===0) 
      console.log(validarTemperaments(dogTemperaments.values)==="")
      if(Object.keys(validarInputs(dogData)).length===0 && validarTemperaments(dogTemperaments.values)===''){

        const dog = {
          name: dogData.name,
          height: dogData.maxHeight + " - " + dogData.minHeight,
          weight: dogData.maxWeight + " - " + dogData.minWeight,
          life_span: dogData.maxLife + " - " + dogData.minLife,
          temperaments: dogTemperaments.values,
        };
        dispatch(postDog(dog));
        window.alert("Raza de perro creada");
        setDogData({
          name: "",
          minHeight: "",
          maxHeight: "",
          minWeight: "",
          maxWeight: "",
          minLife: "",
          maxLife: "",
        });
        setSelects([
          <select
            onClick={(e) => handleSelectsClick(e)}
            key="0"
            defaultValue={"DEFAULT"}
            name="0"
            className={styles.select}
          >
            <option disabled value="DEFAULT">
              Select temperament
            </option>
            {temperaments.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </select>,
        ]);
      }else{
        window.alert("faltan datos")
      }
    } catch (error) {
      window.alert("error: " + error);
    }
  }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <h1>CREATE RACE</h1>
      <hr></hr>
      <div>
        <span>Name</span>
        <input
          onChange={(e) => handleInputChange(e)}
          name="name"
          className={errors.name && styles.warning}
          type="text"
          value={dogData.name}
          placeholder="Type name"
        />
        <p className={styles.error}> {errors.name}</p>
      </div>
      <div className={styles.contenedor}>
        <div className={styles.box}>
          <span>Height</span>
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.height? styles.warningNumber : styles.number}
            type="number"
            name="minHeight"
            value={dogData.minHeight}
            placeholder="MIN"
            min="1"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.height? styles.warningNumber : styles.number}
            type="number"
            min="1"
            value={dogData.maxHeight}
            name="maxHeight"
            placeholder="MAX"
          />
        </div>
        <div className={styles.box}>
          <span>Weight</span>
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.weight? styles.warningNumber : styles.number}
            type="number"
            value={dogData.minWeight}
            placeholder="MIN"
            name="minWeight"
            min="1"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.weight? styles.warningNumber : styles.number}
            type="number"
            placeholder="MAX"
            name="maxWeight"
            value={dogData.maxWeight}
            min="1"
          />
        </div>
        <div className={styles.box}>
          <span>Life span</span>
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.life? styles.warningNumber : styles.number}
            type="number"
            value={dogData.minLife}
            placeholder="MIN"
            name="minLife"
            min="1"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.life? styles.warningNumber : styles.number}
            type="number"
            placeholder="MAX"
            min="1"
            value={dogData.maxLife}
            name="maxLife"
          />
        </div>
      </div>
        <p className={styles.error}> {errors.height || errors.weight ||errors.life }</p>
      <div className={styles.temperaments}>
        <button onClick={(e) => handleTemperaments(e)}>Add temperament</button>
        <span>Temperament/s</span>

        <div name="selectors">{selects.map((e) => e)}</div>
        <p className={styles.error}>{errors.selects}</p>
      </div>
      <button className={styles.button} type="submit">
        Create race
      </button>
      <hr></hr>
    </form>
  );
}
