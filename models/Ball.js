const mongoose = require('mongoose');

const ballSchema = new mongoose.Schema({
    match_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true },
    innings_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Innings', required: true },
    over_no: { type: Number, required: true },
    ball_no: { type: Number, required: true },
    bowler_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    striker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    non_striker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    runs_bat: { type: Number, default: 0 },
    extras_runs: { type: Number, default: 0 },
    extras_type: {
        type: String,
        enum: ['WIDE', 'NB', 'LB', 'BYE', 'NONE'],
        default: 'NONE'
    },
    is_wicket: { type: Boolean, default: false },
    wicket_type: {
        type: String,
        enum: ['BOWLED', 'CAUGHT', 'RUNOUT', 'LBW', 'STUMPED', 'HIT_WICKET', 'HANDLED_BALL', 'OBSTRUCTING_FIELD', 'TIMED_OUT']
    },
    player_out_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    is_legal_delivery: { type: Boolean, default: true },
    is_boundary: { type: Boolean, default: false },
    batsmen_crossed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Ball', ballSchema);
