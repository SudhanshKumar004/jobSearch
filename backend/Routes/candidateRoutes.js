const express = require("express")
const route = express.Router();
const jobController = require("../controller/jobController")

route.post("/apply", jobController.applySave)

module.exports = route