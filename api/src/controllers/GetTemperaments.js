const { Temperament } = require("../db");
const axios = require("axios");

const GetTemperaments = async function (req, res) {
  try {
    const result = await axios.get("https://api.thedogapi.com/v1/breeds");
    const data = result.data;
    let temperaments = [];
    data.forEach((e) => {
      if (e.temperament) {
        const result = e.temperament.split(",");
        temperaments = temperaments.concat(result);
      }
    });
    temperaments = temperaments.map((e) => e.trim());
    temperaments = temperaments.filter((e, i) => temperaments.indexOf(e) === i);
    temperaments.forEach((e, i) => {
      Temperament.create({
        id: i,
        nombre: e,
      });
    });
    res.status(201).json(temperaments);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = GetTemperaments;
