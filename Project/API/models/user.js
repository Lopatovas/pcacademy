const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);