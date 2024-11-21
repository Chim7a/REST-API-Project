import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    shirtNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const FavFootballers = mongoose.model("footballers", userSchema);

export default FavFootballers;
