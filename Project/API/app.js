const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(config.CONNECTION_STRING);
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/players', player);

app.listen(config.PORT, () => {
    console.log('Server started!');
});