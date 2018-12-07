const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TeamSchema = new Schema({
    teamName: {type: String, required: true, unique: true},
    homeTown: {type: String, required: true},
    stadium: {type: String, required: true},
    coach: {type:String, required: true, unique: true}
});

module.exports = mongoose.model('Team', TeamSchema);