import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose'
import { signAccessJwt, signRefreshJwt } from '../jwt.js';

const router = express.Router();

const CLIENT_URL = "http://localhost:3000";

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));


router.get(
  '/google/callback',
  passport.authenticate('google', { session: false  }),
  (req, res) => {
    console.log(req.user)
    const user = req.user;
    const tokens = {
      accessJwt : signAccessJwt({email: user.email}),
      refreshJwt : signRefreshJwt({email: user.email})
    }
    // Redirect or respond with the JWT token
    // res.cookie('token', tokens, { httpOnly: true });
    // tokens && user  && res.redirect(CLIENT_URL + '/dashboard')
    res.json({ 
      status:"success",
      user,
      tokens });
  },

);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL + '/dashboard',
    failureRedirect: "/login/failed",
  })
);
router.get('/login/success', (req, res) => {
 console.log(req.user)
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });
// const authenticateJWT = (req, res, next) => {
//   const token = req.headers.authorization;
// console.log(token)
//   if (token) {
//     jwt.verify(token, process.env.SECRET, (err, decoded) => {
//       if (err) {
//         // Handle invalid token
//         return res.sendStatus(403);
//       }

//       req.user = decoded;
//       next();
//     });
//   } else {
//     // No token provided
//     res.sendStatus(401);
//   }
// };

// router.get('/protected', authenticateJWT, (req, res) => {
//   // Handle protected route
//   res.send('Protected route');
// });



//github
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL +'/dashboard',
    failureRedirect: "/login/failed",
  })
);


//facebook
router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


export default router;
