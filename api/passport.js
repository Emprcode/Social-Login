import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as LinkedinStrategy } from 'passport-linkedin-oauth2';

import dotenv from 'dotenv'
dotenv.config()



// GITHUB_CLIENT_ID = "your id";
// GITHUB_CLIENT_SECRET = "your id";

// FACEBOOK_APP_ID = "your id";
// FACEBOOK_APP_SECRET = "your id";
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
     

      // Return the token to the frontend
      return done(null, profile );
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


export default passport