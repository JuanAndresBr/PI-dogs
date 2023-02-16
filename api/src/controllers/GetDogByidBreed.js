const axios = require("axios");

const GetDogByidBreed = async function (req, res) {
  const { idBreed } = req.params;
  try {
    const data = await axios.get(`/dogs`);
    const dogs = data.data;
    const result = dogs.find((e) => e.id === Number(idBreed));
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetDogByidBreed;
