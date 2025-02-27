const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config();
const companyRoutes = require("./Routes/companyRoutes")
const candidateRoutes = require("./Routes/candidateRoutes")

app.use(cors());

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Connected!");   
})


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use("/company" , companyRoutes)
app.use("/candidate" , candidateRoutes)

const Port = process.env.PORT || 3000;
app.listen(Port , ()=>{
    console.log(`Server running on Port ${Port}`); 
})