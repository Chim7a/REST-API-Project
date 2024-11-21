import dotenv from "dotenv/config";
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 4002;

import userRoutes from "./routes/userRoutes.js";

// Use to extract values sent from the incoming request.
app.use(express.json());

app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to Database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("Server started successfully");
    console.log("Connected to datbase");
  } catch (error) {
    console.log(error);
  }
}

// Connect to server
app.listen(port, () => {
  connectToDatabase();
});
