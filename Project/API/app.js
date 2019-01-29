const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const player = require('./routes/player');
const team = require('./routes/team');
const post = require('./routes/post');
const user = require('./routes/user');
const passport = require('passport');
const errorHandler = require('./errorHandler');
const cors = require('cors');

const config_test = require('./config_test');

require('./authentication/localStrategy');
require('./authentication/jwtStrategy');


if(process.env.NODE_ENV && process.env.NODE_ENV === 'test'){
    mongoose.connect(config_test.CONNECTION_STRING_TEST);
}
else{
    mongoose.connect(config.CONNECTION_STRING);
}
mongoose.Promise = global.Promise;

const app = express();

app.use(cors({origin: config.CORS_ENABLED_URL}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/players', passport.authenticate('jwt', {session: false}), player);
app.use('/teams', passport.authenticate('jwt', {session: false}), team);
app.use('/posts', passport.authenticate('jwt', {session: false}), post);
app.use('/users', user);
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log('Server started!');
});

module.exports = app;