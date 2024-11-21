import validator from "validator";
import FavFootballers from "../model/user.js";

async function updateFootballer(req, res) {
  const { userId } = req.params;
  const { fullName, club, position, shirtNumber } = req.body;

  // Check if userId is provided
  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide user id" });
  }

  //   Check if any of the details are not provided.
  if (!fullName || fullName.trim().length < 1) {
    return res
      .status(400)
      .json({ message: "Please provide a valid full name." });
  }

  if (!club || club.trim().length < 1) {
    return res
      .status(400)
      .json({ message: "Please provide a valid full name." });
  }

  if (!position || position.trim().length < 1) {
    return res
      .status(400)
      .json({ message: "Please provide a valid position." });
  }

  if (!shirtNumber) {
    return res
      .status(400)
      .json({ message: "Please provide a valid shirt number." });
  }

  //   Check if account already exist.
  const footballerExist = await FavFootballers.findById(userId);

  if (footballerExist === null) {
    return res
      .status(400)
      .json({ message: `An account with id ${userId} does not exist.` });
  }

  try {
    const updatePlayer = await FavFootballers.findByIdAndUpdate(userId, {
      fullName: fullName,
      club: club,
      position: position,
      shirtNumber: shirtNumber,
    });
    console.log(updatePlayer);

    res.status(201).json({
      message: "Player updated successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error occured" });
  }
}

export default updateFootballer;
