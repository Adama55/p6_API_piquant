const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controlleurs/sauces")

router.get("/", sauceCtrl.getSauce)

module.exports = router;