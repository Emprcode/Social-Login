import express from "express"
import cors from "cors"
// import passport from "passport"
import authRoute from "./src/router/AuthRouter.js"
import passport from './passport.js'


 const app = express();

//  app.use(session({
//    secret: '7ce53b6bab2f7511a1dc6b365b3da008d60094dd019e6575eb2a459125e38976',
//    resave: false,
//    saveUninitialized: false
//  }));
app.use(express.json())
app.use(passport.initialize());
// app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3002",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});

