import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose'
import { signAccessJwt, signRefreshJwt } from '../jwt.js';
import { UserAuth } from '../authMiddleware.js';

const router = express.Router();

const CLIENT_URL = "http://localhost:3000";



router.get("/login/success", (req, res) => {
 
  if (req.user && tokens) {
    res.status(200).json({
      success: true,
      message: "successfull",
      // user: req.user,
      // tokens
    });
  }
});


// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });

// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// router.get(
//   "/google/callback",
//   passport.authenticate("google",  {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));


router.get(
  '/google/callback',
  passport.authenticate('google', { session: false  }),
  async(req, res) => {
    const user = req.user;
    const email = user.emails[0].value
    
    
   
  // req.user && tokens && 

    const tokens = {
      accessJwt : await signAccessJwt({email}),
      refreshJwt : await signRefreshJwt({email})
    }

    console.log(tokens)
    res.json({ 
      status:"success",
      message:"user registered succcessfully",
       tokens
    
    })
    

    },
    
    )

router.get(
  '/google/callback',
 
  (req, res) => {
   if (user && tokens ) {
   return  res.redirect("/dashboard") 
    
   }
    
    
   


   

  
    

    },
    
    )

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: CLIENT_URL + '/dashboard',
//     failureRedirect: "/login/failed",
//   }, {session: false}), 

// );


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
