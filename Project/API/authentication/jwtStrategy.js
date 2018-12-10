const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const config = require('../config');

const jwtStrategy = new JWTStrategy({
    secretOrKey: config.JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromHeader(config.JWT_HEADER_KEY)
}, passUser);

async function passUser(token, done) {
    try{
        done(null, token.user);
    }catch(error){
        done(error);
    }
}

passport.use('jwt', jwtStrategy);