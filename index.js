import express from "express";
import dbConnection from "./db/db.js";
import cors from 'cors'
import UserRoutee from "./Routes/UserRoute.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://teal-bublanina-36d41f.netlify.app'],
  credentials: true,
}));
dbConnection();
app.use("/api/user",UserRoutee)
app.listen(4000, () => {
  console.log("server is running");
});
