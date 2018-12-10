const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');
const messages = require('./messages');

const signUpStrategy = new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true
}, createUser);

async function createUser (req, userName, password, done) {
    try {
        const user = await UserModel.create({
            userName: userName,
            email: req.body.email, 
            password: password});
        done(null, user);

    } catch(error) {
        done(error);
    }
}

loginStrategy = new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password'
}, loginUser);

async function loginUser (userName, password, next) {
    try {
        const user = await UserModel.findOne({userName});
        if(!user){
            next(null, false, {message: messages.NOT_FOUND});
        }

        const isValid = await user.isValidPassword(password);
        if(!isValid){
            next(null, false, {message: messages.INVALID_PASSWORD});
        }

        return next(null, user, {message: messages.SUCCESS});

    } catch(error) {
        next(error);
    }
}

passport.use('signup', signUpStrategy);
passport.use('login', loginStrategy);