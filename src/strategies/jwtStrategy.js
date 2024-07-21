import { UserModel } from '../models/userModel.js';

import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
        const user = await UserModel.findOne({ _id: jwt_payload.sub });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    } catch (err) {
        return done(err, false);
    }
}));