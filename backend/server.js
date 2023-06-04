import express from "express";
import cors from "cors";
import authRoute from "./src/router/AuthRouter.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", authRoute);

app.listen("8000", () => {
  console.log("Server is running!");
});
