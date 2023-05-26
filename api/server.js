// const cookieSession = require("cookie-session");
import express from 'express';
import cors from "cors";
import passportSetup from "./passport.js";
import authRoute from"./src/router/AuthRouter.js";

import passport from 'passport';

import mongoose from 'mongoose';
const app = express();

// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors()
);

// app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});