const express=require('express');
const router=express.Router()
const Team=require("../models/Team")
router.post("/",async(req,res)=>{
    try{
        const{name,short_name}=req.body;
    
    const team=new Team({
        name,short_name
    })
    await team.save()
    res.status(201).json(team)
    }
    catch(error){
        res.status(500).json({error:error.message})

    }
});
module.exports=router;
