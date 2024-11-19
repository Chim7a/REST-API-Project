import dotenv from "dotenv/config";
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 4002;

// Connect to Database
async function connectToDatabase(params) {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("Server started successfully");
    console.log("Connected to datbase");
  } catch (error) {
    console.log(error);
  }
}

// Listen to server
app.listen(port, () => {
  connectToDatabase();
});
