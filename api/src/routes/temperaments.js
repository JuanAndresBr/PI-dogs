const express = require("express");
const router= express.Router();
const GetTemperaments= require("../controllers/GetTemperaments")

router.get("/", GetTemperaments)

module.exports=router