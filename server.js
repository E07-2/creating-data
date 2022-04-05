import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Guitars from "./models/guitar.js";

const app = express();

// middleware
app.use(express.json()); // convert the body to JSON

// adds the keys from my .env file into my process.env object
dotenv.config();

// connect to our database
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connected! 🐢");
  })
  .catch((error) => {
    console.log(error);
    console.log("There was an error connecting to the database");
  });

app.get("/", async (req, res) => {
  try {
    const guitars = await Guitars.find();
    res.send(guitars);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.post("/", async (req, res) => {
  try {
    await Guitars.create(req.body);
    // 1. make the server handle errors gracefully (not crashing)
    // 2. inform the user that their data was invalid?
    res.send("ok");
  } catch (error) {
    res.status(400).send("Error");
  }
});

app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
