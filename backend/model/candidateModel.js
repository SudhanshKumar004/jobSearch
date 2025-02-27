const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        address:String,
        city:String,
        age:String,
        contact:String,
        exp:String,
        companyid:[{type:mongoose.Schema.Types.ObjectId, ref:'company'}]
    }
)

module.exports = mongoose.model("Candidate" , candidateSchema)