import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as LinkedinStrategy } from 'passport-linkedin-oauth2';
import UserSchema from './src/user/UserSchema.js';
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GithubStrategy = require("passport-github2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
// const passport = require("passport");

const GOOGLE_ID = process.env.GOOGLE_CLIENT_ID

const GOOGLE_SECRET = process.env.GOOGLE_CLIENT_SECRET

// GITHUB_CLIENT_ID = "your id";
// GITHUB_CLIENT_SECRET = "your id";

// FACEBOOK_APP_ID = "your id";
// FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function  (accessToken, refreshToken, profile, done) {
      const email = profile.emails[0].value;
  const name = profile.displayName;
  // const { id, displayName, email } = profile;
  // if (!profile[id]) {
  //   profile[id] = { id, displayName, email };
  // }

  // Generate a JWT token
  // const token = jwt.sign({ userId: id }, jwtSecret, { expiresIn: '1h' });

  // Return the token to the client
  // return done(null, { token });
  // Create a new user document
  const newUser = new UserSchema({
    email: email,
    name: name
    // Set other user fields as needed
  });

  // Save the new user document to the database
  await newUser.save( )
   
    return done(null, newUser, 
      // {token}
      );
  
      // done(null, profile);
    }
  )
);

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// export default router;

export default passport