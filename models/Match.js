const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    date_time: { type: Date, required: true },
    venue: { type: String, required: true, trim: true },
    total_overs: { type: Number, required: true },
    max_overs_per_bowler: { type: Number, required: true },
    status: {
        type: String,
        enum: ['SCHEDULED', 'LIVE', 'COMPLETED', 'ABANDONED'],
        default: 'SCHEDULED'
    },
    toss_winner_team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    toss_decision: { type: String, enum: ['BAT', 'BOWL'] },
    winner_team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    win_margin: { type: String },
    current_innings_no: { type: Number, default: 1 },
    current_batting_team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    current_striker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    current_non_striker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    current_bowler_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' }
}, { timestamps: true });

module.exports = mongoose.model('Match', matchSchema);
