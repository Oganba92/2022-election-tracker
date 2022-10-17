const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const electionSchema = new Schema({
    level: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    forecast: {type: String},
    candidate1: {type: String},
    candidate2: {type: String},
    candidate3: {type: String},
    candidate4: {type: String},
    forecast: {type: String}, 
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }

}, {
    timestamps: true,
});

module.exports = mongoose.model('Election', electionSchema);