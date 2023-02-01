const axios = require("axios");
const { Race } = require("../db");

const GetDogByidRaza = async function (req, res) {
  const { idRaza } = req.params;
  try {
    const data = await axios.get("http://localhost:3001/dogs");
    const dogs= data.data
    const result = dogs.find(e=> e.id===Number(idRaza))
    console.log(result)
    res.status(201).json(result);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

module.exports = GetDogByidRaza;
