const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, enum: ['BATSMAN', 'BOWLER', 'ALL_ROUNDER', 'WICKETKEEPER'], uppercase: true },
  career_matches: { type: Number, default: 0 },
  career_runs: { type: Number, default: 0 },
  career_wickets: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);