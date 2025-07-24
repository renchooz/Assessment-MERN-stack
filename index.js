import express from "express";
import dbConnection from "./db/db.js";
import UserRoutee from "./Routes/UserRoute.js";

const app = express();
app.use(express.json());
dbConnection();
app.use("/api/user",UserRoutee)
app.listen(5001, () => {
  console.log("server is running");
});
