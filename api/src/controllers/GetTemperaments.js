const { Temperament } = require("../db");
const axios = require("axios");

const GetTemperaments = async function (req, res) {
  try {
    const dataBD = await Temperament.findAll({});
    let temperaments = [];
    if (dataBD.length === 0) {
      const result = await axios.get("https://api.thedogapi.com/v1/breeds");
      const dataAPI = result.data;

      dataAPI.forEach((e) => {
        if (e.temperament) {
          const result = e.temperament.split(",");
          temperaments = temperaments.concat(result);
        }
      });
      temperaments = temperaments.map((e) => e.trim());
      temperaments = temperaments.filter(
        (e, i) => temperaments.indexOf(e) === i
      );
      temperaments= temperaments.map((e,i)=>{return {id:i, nombre: e}})
      temperaments.forEach((e) => {
        Temperament.create({
          id: e.id,
          nombre: e.nombre,
        });
      });
    } else {
      dataBD.forEach((temperament) => {
        temperaments.push({
          id: temperament.dataValues.id,
          nombre: temperament.dataValues.nombre,
        });
      });
    }
    res.status(201).json(temperaments);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = GetTemperaments;
