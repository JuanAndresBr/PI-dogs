const axios = require("axios");
const { Breed, Temperament } = require("../db");

const GetDogs = async function (req, res) {
  try {
    const { name } = req.query;
    var dogs = [];
    const resultApi = await axios(`https://api.thedogapi.com/v1/breeds`);
    const dataApi = resultApi.data;
    const resultBD = await Breed.findAll({
      attributes: ["id", "name", "weight", "height", "life_span", "image"],
    });
    dataApi.forEach((dog) => {
      dogs.push({
        id: dog.id,
        name: dog.name,
        temperament: dog.temperament,
        image: dog.image.url,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
      });
    });

    for (let i = 0; i < resultBD.length; i++) {
      const result = await Breed.findOne({
        where: { id: resultBD[i].dataValues.id },
        include: Temperament,
      });
      const temperaments = result.dataValues.temperaments.map(
        (e) => e.dataValues.name
      );
      const text = temperaments.join(", ");
      dogs.push({
        id: resultBD[i].dataValues.id,
        name: resultBD[i].dataValues.name,
        temperament: text,
        image: resultBD[i].dataValues.image,
        weight: resultBD[i].dataValues.weight,
        height: resultBD[i].dataValues.height,
        life_span: resultBD[i].dataValues.life_span,
      });
    }

    if (name) {
      const result = dogs.filter((e) => {
        return e.name.toLowerCase().includes(name.toLowerCase());
      });
      if (result.length === 0) {
        res.status(200).json([]);
      } else {
        res.status(200).json(result);
      }
    } else {
      res.status(200).json(dogs);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};
module.exports = GetDogs;
