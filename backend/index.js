const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config();
const companyRoutes = require("./Routes/companyRoutes")

app.use(cors());

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Connected!");   
})


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use("/company" , companyRoutes)

const Port = process.env.PORT || 3000;
app.listen(Port , ()=>{
    console.log(`Server running on Port ${Port}`); 
})