const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let PostSchema = new Schema({
    userName: {
        type: String,
        required: true },
    text: {
        type: String,
        required: true },
    pageId: {
        type: String,
        required: true },
});

module.exports = mongoose.model('Post', PostSchema);