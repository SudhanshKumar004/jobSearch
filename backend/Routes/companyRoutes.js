const express = require("express")
const route = express.Router();
const jobController = require("../controller/jobController")


route.post("/registration" , jobController.registrationData)
route.get("/jobdisplay" , jobController.jobDisplay)
route.post("/companylogin" , jobController.companyLogin)
route.post("/searchcompany" , jobController.companySearch)
route.get("/jobinfo" , jobController.JobInfo)


module.exports = route