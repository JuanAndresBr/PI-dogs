const express = require("express");
const router= express.Router();
const GetDogs = require("../controllers/GetDogs")
const GetDogByidBreed= require("../controllers/GetDogByidBreed")
const PostDog = require("../controllers/PostDog")

router.get("/", GetDogs)
router.get("/:idBreed", GetDogByidBreed)
router.post("/", PostDog)
module.exports=router