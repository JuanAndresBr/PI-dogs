const express = require("express");
const router= express.Router();
const GetDogs = require("../controllers/GetDogs")
const GetDogByidRaza= require("../controllers/GetDogByidRaza")
const PostDog = require("../controllers/PostDog")

router.get("/", GetDogs)
router.get("/:idRaza", GetDogByidRaza)
router.post("/", PostDog)
module.exports=router