const mongoose = require('mongoose');

const scorecardSchema = new mongoose.Schema({
    match_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true, unique: true },
    last_updated: { type: Date, default: Date.now },
    full_summary_json: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

module.exports = mongoose.model('Scorecard', scorecardSchema);
