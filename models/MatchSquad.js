const mongoose = require('mongoose');

const matchSquadSchema = new mongoose.Schema({
    match_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true },
    team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    player_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    is_captain: { type: Boolean, default: false },
    is_keeper: { type: Boolean, default: false }
}, { timestamps: true });

// Ensure a player is not added twice to the same match
matchSquadSchema.index({ match_id: 1, player_id: 1 }, { unique: true });

module.exports = mongoose.model('MatchSquad', matchSquadSchema);
