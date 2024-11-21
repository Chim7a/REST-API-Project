import FavFootballers from "../model/user.js";

async function allFootballers(req, res) {
  try {
    const result = await FavFootballers.find();
    console.log(result);
    res.status(500).json({ message: "All footballers successfully loaded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error occured" });
  }
}

export default allFootballers;
