const companyModel = require("../model/companyModel")

const registrationData = async(req,res)=>{
    const {name, title, address, city, salary, description , email, password} = req.body;
    let CompanyData = await companyModel.create({
    name:name,
    title:title,
    address:address,
    city:city,
    salary:salary,
    description:description,
    email:email,
    password:password
    })

    try {
        res.status(200).send("Registration Successfull!")    
    } catch (error) {
        res.status(400).send("Registrations Failed!")
    }
    
}

const jobDisplay = async (req,res)=>{
try {
    let jobdata = await companyModel.find();
    res.status(200).send(jobdata)
} catch (error) {
    console.log(error);
    res.status(400).send("Error Fatching Data")
} 
}

const companyLogin=async(req,res)=>{
    const {email , password} = req.body;

    try {

        let CompanyData = await companyModel.findOne({email:email}) ;
        
        if(!CompanyData)
        {
            res.status(400).send({msg:"Invalid Email"})
        }

        if(CompanyData.password != password)
        {
            res.status(400).send({msg:"Invalid Password"})
        }

        res.status(200).send(CompanyData)
    
    } 
    
    catch (error) {
        console.log(error);
        
    }
    
}

const companySearch = async(req,res)=>{
    const {name, title} = req.body;
    try {
    let CompanySearchData = await companyModel.find({$or:[{"name":name},{"title":title}]}) 
    res.status(200).send(CompanySearchData)  
    } 
    
    catch (error) {
        res.status(400).send({msg:"Cannot Search!"})
    }
    
}

module.exports = {
    registrationData,
    jobDisplay,
    companyLogin,
    companySearch
}