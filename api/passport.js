import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken'
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as LinkedinStrategy } from 'passport-linkedin-oauth2';
import UserSchema from './src/user/UserSchema.js';


const GOOGLE_ID = "671128114044-7o7s681ijl2cqksbq7c3nqbec3npdbhp.apps.googleusercontent.com"

const GOOGLE_SECRET = "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"
const jwtSecret = "7ce53b6bab2f7511a1dc6b365b3da008d60094dd019e6575eb2a459125e38976"


// GITHUB_CLIENT_ID = "your id";
// GITHUB_CLIENT_SECRET = "your id";

// FACEBOOK_APP_ID = "your id";
// FACEBOOK_APP_SECRET = "your id";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle authentication and user registration
      // ...

      // Generate a JWT token
      const token = jwt.sign({ userId: profile.id }, jwtSecret, { expiresIn: '1h' });

      // Return the token to the frontend
      return done(null, { token });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// export default router;

export default passport