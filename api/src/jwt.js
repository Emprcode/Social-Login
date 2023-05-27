import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';


const jwtSecret = 'your_jwt_secret_key';

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
    // Here, you can find and authenticate the user based on the payload
    const user = findUserByPayload(payload);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
  
  passport.use(jwtStrategy);
  