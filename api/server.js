import session from 'express-session';
import express from "express"
import cors from "cors"
import passportSetup from "./passport.js"
import passport from "passport"
import authRoute from "./src/router/AuthRouter.js"

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { connectDB } from './src/config.js';
dotenv.config()
const app = express();





app.use(cors());
app.use(express.json());

// MongoDB configuration and connection
// ...

// JWT configuration


app.use(passport.initialize());

app.use("/", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});