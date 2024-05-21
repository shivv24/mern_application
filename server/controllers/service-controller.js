const Service=require("../models/service-model");
const services=async(req,res)=>{
    try{
        const response=await Service.find();
        if(!response){
            return res.status(404).json({msg:"No service found"});
        }
        res.status(200).json({msg:response});
        }
    catch(error){
        console.log(`services:${error}`);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports=services;