import styles from "./Form.module.css";
import React, { useState } from "react";
import { postDog } from "../../Redux/actions";
import { validarInputs } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";

export default function Form() {
  const dispatch = useDispatch();
  const temperaments = useSelector((s) => s.allTemperaments);
  const [dogTemperaments, setDogTemperaments] = useState([]);
  const [file, setFile] = useState(null);
  const [dogData, setDogData] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife: "",
    maxLife: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life: "",
    temperaments: "",
  });

  function handleTemperaments(e) {
    var updateList = [...dogTemperaments];
    if (e.target.checked) {
      updateList = [...dogTemperaments, e.target.value];
    } else {
      updateList.splice(dogTemperaments.indexOf(e.target.value), 1);
    }
    setDogTemperaments(updateList);
    setErrors(validarInputs(dogData, updateList));
  }

  function handleInputChange(e) {
    setDogData({
      ...dogData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validarInputs(
        { ...dogData, [e.target.name]: e.target.value },
        dogTemperaments
      )
    );
  }

  function handleImage(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (Object.keys(validarInputs(dogData, dogTemperaments)).length === 0) {
        let image= null
        if(file){

          const cloudinaryUrl =
            "https://api.cloudinary.com/v1_1/dqiah55rm/image/upload";
          const cloudinaryID = "icieqqlf";
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", cloudinaryID);
          const res = await axios.post(cloudinaryUrl, formData, {
            header: {
              "content-type": "multipart/form-data",
            },
          });
          image= res.data.secure_url
        }
        const dog = {
          name: dogData.name,
          height: dogData.maxHeight + " - " + dogData.minHeight,
          weight: dogData.maxWeight + " - " + dogData.minWeight,
          life_span: dogData.maxLife + " - " + dogData.minLife,
          temperaments: dogTemperaments,
          image 
        };
        dispatch(postDog(dog));
        window.alert("Dog breed created");
        setDogData({
          name: "",
          minHeight: "",
          maxHeight: "",
          minWeight: "",
          maxWeight: "",
          minLife: "",
          maxLife: "",
        });
        setDogTemperaments([]);
        document
          .querySelectorAll("input[type=checkbox]")
          .forEach((el) => (el.checked = false));
        setFile(null)
        document
          .querySelectorAll("input[type=file]")
          .forEach((el) => (el.value = null));
      } else {
        window.alert("data is missing");
      }
    } catch (error) {
      window.alert("error: " + error);
    }
  }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.back}>
        <Link to="/home">
          <button>🡰</button>
        </Link>
      </div>
      <h1>CREATE BREED</h1>
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
            className={errors.height ? styles.warningNumber : styles.number}
            type="number"
            name="minHeight"
            value={dogData.minHeight}
            placeholder="MIN"
            min="1"
            max="200"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.height ? styles.warningNumber : styles.number}
            type="number"
            min="1"
            value={dogData.maxHeight}
            name="maxHeight"
            placeholder="MAX"
            max="200"
          />
        </div>
        <div className={styles.box}>
          <span>Weight</span>
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.weight ? styles.warningNumber : styles.number}
            type="number"
            value={dogData.minWeight}
            placeholder="MIN"
            name="minWeight"
            min="1"
            max="100"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.weight ? styles.warningNumber : styles.number}
            type="number"
            placeholder="MAX"
            name="maxWeight"
            value={dogData.maxWeight}
            min="1"
            max="100"
          />
        </div>
        <div className={styles.box}>
          <span>Life span</span>
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.life ? styles.warningNumber : styles.number}
            type="number"
            value={dogData.minLife}
            placeholder="MIN"
            name="minLife"
            min="1"
            max="200"
          />
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.life ? styles.warningNumber : styles.number}
            type="number"
            placeholder="MAX"
            min="1"
            max="200"
            value={dogData.maxLife}
            name="maxLife"
          />
        </div>
      </div>
      <p className={styles.error}>
        {errors.height || errors.weight || errors.life}
      </p>
      <div className={styles.inputImage}>
        <input
          onChange={handleImage}
          type="file"
          name="imagen1"
          accept="image/png, image/jpeg"
        ></input>
        {file ? (
          <img alt="Preview" height="60" src={URL.createObjectURL(file)} />
        ) : null}
      </div>
      <div className={styles.temperaments}>
        <span>Temperament/s</span>
        <section className={styles.section}>
          {temperaments.map((e) => {
            return (
              <div key={e.id}>
                <input
                  onChange={handleTemperaments}
                  value={e.id}
                  key={e.id}
                  type="checkbox"
                ></input>
                <span>{e.name}</span>
              </div>
            );
          })}
        </section>
        <p className={styles.error}>{errors.temperaments}</p>
      </div>
      <button className={styles.button} type="submit">
        Create breed
      </button>
      <hr></hr>
    </form>
  );
}
