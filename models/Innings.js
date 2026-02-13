const mongoose = require('mongoose');

const inningsSchema = new mongoose.Schema({
    match_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true },
    innings_no: { type: Number, required: true },
    batting_team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    bowling_team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    total_runs: { type: Number, default: 0 },
    total_wickets: { type: Number, default: 0 },
    total_overs: { type: Number, default: 0 },
    is_declared: { type: Boolean, default: false },
    is_completed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Innings', inningsSchema);
