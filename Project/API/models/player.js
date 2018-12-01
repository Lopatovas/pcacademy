const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let PlayerSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    nationality: {type:String, required: true},
    playerPosition: {type: String, required: true},
    team: {type: String},
    jerseyNumber: {type:Number}
});

module.exports = mongoose.model('Player', PlayerSchema);