const { Race, Temperament, racetemperament } = require("../db");
const axios = require("axios");
const PostDog = async function (req, res) {
  const { name, height, weight, life_span, temperaments } = req.body;
  try {
    const dogs = await axios.get("http://localhost:3001/dogs");
    const index = dogs.data.length;
    const id = dogs.data[index - 1].id + 1;
    if (name || height || weight || life_span || temperaments) {
      const newRace = await Race.create(
        {
          id,
          name,
          height,
          weight,
          life_span,
        }
      );
      newRace.setTemperaments(temperaments)
      res.status(201).json(newRace);
    } else {
      res.status(500).json("Falta algún dato");
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};
module.exports = PostDog;
