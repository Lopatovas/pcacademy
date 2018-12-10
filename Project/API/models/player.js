const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;

let PlayerSchema = new Schema({
    firstName: {
        type: String, 
        required: true },
    lastName: {
        type: String, 
        required: true },
    age: {
        type: Number, 
        required: true, 
        min: config.MIN_PLAYER_AGE, 
        max: config.MAX_PLAYER_AGE },
    nationality: {
        type:String, 
        required: true },
    playerPosition: {
        type: String, 
        required: true },
    team: {
        type: String },
    jerseyNumber: {
        type:Number }
});

module.exports = mongoose.model('Player', PlayerSchema);