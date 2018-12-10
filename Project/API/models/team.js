const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TeamSchema = new Schema({
    teamName: {type: String, required: true, unique: true},
    homeTown: {type: String, required: true},
    stadium: {type: String, required: true},
    coach: {type:String, required: true, unique: true}
}, {toJSON: {virtuals: true}});

TeamSchema.virtual('players', {
    ref: 'Player',
    localField: 'teamName',
    foreignField: 'team'
})

module.exports = mongoose.model('Team', TeamSchema);