const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
router.post("/",async(req,res)=>{
    try{
        const {name,role,career_matches,career_runs,career_wickets}=req.body
        const player=new Player({
            name,role,career_matches:career_matches||0,career_wickets:career_wickets||0,career_runs:career_runs||0
        });
        await player.save();
        res.status(201).json(player)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})
router.get("/",async(req,res)=>{
    try{
        const players=await Player.find()
        res.json(players)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const player=await Player.findById(req.params.id)
        if (!player){
            return res.status(404).json({message: "Player not found"})
        }
        res.json(player)

    }
    catch(error){
        res.status(500).json({error:error.message})
    }
});
router.put("/:id",async(req,res)=>{
    try{
        const{career_matches,career_runs,career_wickets}=req.body
        const updatedPlayer=await Player.findByIdAndUpdate(req.params.id,{career_matches,career_runs,career_wickets},{new:true})
        res.json(updatedPlayer);
    }
    catch(error){
        res.status(500).json({error:error.message})

    }
})
module.exports = router;
