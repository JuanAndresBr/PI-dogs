const { Breed} = require("../db");
const axios = require("axios");
const PostDog = async function (req, res) {
  const { name, height, weight, life_span, temperaments } = req.body;
  try {
    const dogs = await axios.get("https://pi-dogs-production-c065.up.railway.app/dogs");
    const index = dogs.data.length;
    const id = dogs.data[index - 1].id + 1;
    if (name || height || weight || life_span || temperaments) {
      const newBreed = await Breed.create(
        {
          id,
          name,
          height,
          weight,
          life_span,
        }
      );
      newBreed.setTemperaments(temperaments)
      res.status(201).json(newBreed);
    } else {
      res.status(500).json("data is missing");
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};
module.exports = PostDog;
