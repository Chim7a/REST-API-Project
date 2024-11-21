import validator from "validator";
import FavFootballers from "../model/user.js";

async function deletePlayerFromDB(req, res) {
  const { userId } = req.params;

  // Check if userId is provided
  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide user id" });
  }

  try {
    const deletedPlayer = await FavFootballers.findByIdAndDelete(userId);
    console.log(deletedPlayer);
    res.status(200).json({ message: "User account Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error occured" });
  }
}

export default deletePlayerFromDB;
