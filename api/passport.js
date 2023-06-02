import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as LinkedinStrategy } from 'passport-linkedin-oauth2';

import dotenv from 'dotenv'
import { signAccessJwt, signRefreshJwt } from './src/jwt.js';
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

    
  async  (accessToken, refreshToken, profile, done) => {
    //  console.log(profile)
    //  const user = profile;
    //  const email = profile.emails[0].value
    //  if (user) {
      // const tokens = {
      //   accessJwt : await signAccessJwt({email}),
      //   refreshJwt : await signRefreshJwt({email})
      // }
    //   res.json({ 
    //     status:"success",
    //     message:"user registered succcessfully",
    //      tokens
      
    //   }) } else{ 
    //     return res.status(401).json({ error: 'Authentication failed' });
    // }
      // Return the token to the frontend

      console.log("abc:", profile )
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