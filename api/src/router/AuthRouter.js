import express from 'express'
import passport from 'passport'
const router = express.Router()

import mongoose from 'mongoose'



const CLIENT_URL = "http://localhost:3000/dashboard";


// Connect to MongoDB
await mongoose.connect('mongodb://localhost/test-social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('Connected to MongoDB');

// Create a user model (Mongoose schema)
const User = mongoose.model('User', {
  googleId: String,
//   linkedinId: String,
//   githubId: String,
//   displayName: String,
});

// Configure Passport with Google OAuth strategy
// passport.use(new GoogleStrategy({
//   clientID: 'YOUR_GOOGLE_CLIENT_ID',
//   clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
//   callbackURL: 'http://localhost:5000/auth/google/callback',
// }, async (accessToken, refreshToken, profile, done) => {
//   try {
//     const existingUser = await User.findOne({ googleId: profile.id });
//     if (existingUser) {
//       return done(null, existingUser);
//     }

//     const newUser = new User({
//       googleId: profile.id,
//       displayName: profile.displayName,
//     });
//     await newUser.save();
//     return done(null, newUser);
//   } catch (error) {
//     console.error('Error during Google OAuth:', error);
//     return done(error, null);
//   }
// }));


// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "successfull",
//       user: req.user,
//       //   cookies: req.cookies
//     });
//   }
// });

// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     status: "error",
//     message: "failure",
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

export default router;