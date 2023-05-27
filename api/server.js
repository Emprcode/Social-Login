import session from 'express-session';
import express from "express"
import cors from "cors"
import passportSetup from "./passport.js"
import passport from "passport"
import authRoute from "./src/router/AuthRouter.js"
const app = express();
import dotenv from 'dotenv'
import { connectDB } from './src/config.js';
dotenv.config()

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// databse
connectDB()

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // Session expiration time in milliseconds (e.g., 1 day)
    },
  })
);
// JWT configuration

app.use(passport.session());
app.use(passport.initialize());

app.use(
  cors({
    origin: "http://localhost:3000",

    
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});