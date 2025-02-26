const mongoose = require("mongoose")

const companySchema = new mongoose.Schema(
    {
        name:String,
        title:String,
        address:String,
        city:String,
        salary:String,
        description:String,
        email:String,
        password:String,
        candidateid:[{type:mongoose.Schema.Types.ObjectId, ref:'candidate'}]
    }
)

module.exports = mongoose.model("Company" , companySchema)