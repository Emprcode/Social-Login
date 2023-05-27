import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';


const router = express.Router();

const CLIENT_URL = "http://localhost:3000";

// JWT configuration
// const jwtSecret = 'cbjkDSflagfuiaf546478789412549879';

// // JWT authentication middleware
// const authenticateJWT = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (token) {
//     jwt.verify(token, jwtSecret, (err, user) => {
//       if (err) {
//         return res.sendStatus(403); // Invalid token
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401); // Missing token
//   }
// };


// app.use(passport.initialize());

// Protected route example
// router.get('/protected', (req, res) => {
//   // Access the authenticated user through req.user
//   const user = req.user;
//   res.json({ message: 'Protected route', user });
// });




router.get(
  '/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Redirect or respond with the JWT token
    res.redirect(`/auth/google/success?token=${req.user.token}`);
  }
  );
  router.get("/login/success", (req, res) => {
    console.log(req.user)
  if (req.user) {
    // console.log(req.user.email)
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});


router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL + '/dashboard',
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
