const axios = require("axios");
const { Race } = require("../db");

const GetDogs = async function (req, res) {
  try {
    const { name } = req.query;
    const dogs = [];
    if (name) {
      const result = await axios(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
      );
      const data = result.data;
      data.forEach((dog) => {
        dogs.push({
          id: dog.id,
          name: dog.name,
          temperament: dog.temperament,
          image: dog.image,
          weight: dog.weight,
        });
      });
    } else {
      const resultApi = await axios(`https://api.thedogapi.com/v1/breeds`);
      const dataApi = resultApi.data;
      const resultBD = await Race.findAll({
        attributes: ["id", "name", "weight"],
      });
      dataApi.forEach((dog) => {
        dogs.push({
          id: dog.id,
          name: dog.name,
          temperament: dog.temperament,
          image: dog.image,
          weight: dog.weight,
        });
      });

      resultBD.forEach((dog) => {
        console.log(dog.dataValues)
        dogs.push({
          id: dog.dataValues.id,
          name: dog.dataValues.name,
          temperament: null,
          image: null,
          weight: dog.dataValues.weight,
        });
      });
    }
    if (dogs.length === 0) {
      res.status(500).json("No hay razar relacionadas");
    } else {
      res.status(200).json(dogs);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};
module.exports = GetDogs;
