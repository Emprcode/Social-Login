import express from "express";
import passport from "passport";
import mongoose from "mongoose";
import { signAccessJwt, signRefreshJwt } from "../jwt.js";
import { UserAuth } from "../authMiddleware.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const router = express.Router();

const CLIENT_URL = "http://localhost:3002";

router.get("/login", async (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
  //  const { token, name, email } = req.query;

  // console.log( req.query, token, name)
  //
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {
    const { token, profile } = req.user;
    // console.log(req.user);
    const email = profile.emails[0].value;
    const name = profile.name.givenName;

    res.json({
      profile,
      token,
    });
    // req.user &&
    //   res.status(200).json({
    //     success: true,
    //     message: "successfull",
    //     user: req.user,
    //   });
    // res.redirect(
    //   //   // `/callback?token=${token.accessJwt}&name=${name}&email=${email}`
    //   CLIENT_URL + "/dashboard"
    // );
  }
);

// router.get(
//   "/google/callback",
//   passport.authenticate(
//     "google",

//     {
//       successRedirect: CLIENT_URL,
//       failureRedirect: "/login/failed",
//     }
//   )
// );

//github
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL + "/dashboard",
    failureRedirect: "/login/failed",
  })
);

//facebook
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default router;
