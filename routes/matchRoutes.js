const express=require('express')
const router = express.Router();
const Match = require("../models/Match")
const MatchSquad = require("../models/MatchSquad")
router.post("/",async(req,res)=>{
    try{
        const {date_time,venue,total_overs,max_overs_per_bowler}=req.body;
    const match=new Match({
        date_time,venue,total_overs,max_overs_per_bowler
    });
    await match.save()
    res.status(200).json(match)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }

})
router.post("/:matchId/squad",async(req,res)=>{
    try{
        const{team_id,players,captain_id,keeper_id}=req.body
        if (!players||players.length!==11){
            return res.status(400).json({message:"Exactly 11 players"})
        }
        if (!players.includes(captain_id)){
            return res.status(400).json({message:"Captain must be from the players"})
        }
        if (!players.includes(keeper_id)){
            return res.status(400).json({message:"Keeper must be from the players"})
        }
        const squadData=players.map(playerId=>({
            match_id:req.params.matchId,team_id,
            player_id:playerId,
            is_captain:playerId===captain_id,
            is_keeper:playerId===keeper_id
        }))
        await MatchSquad.insertMany(squadData)
        res.status(201).json({message:"Squad created succesfully"})
    }
    catch(error){
        res.status(500).json({error:error.message})

    }
});
module.exports=router;
