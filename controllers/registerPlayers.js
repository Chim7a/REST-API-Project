import FavFootballers from "../model/user.js";

async function registerPlayer(req, res) {
  const { fullName, club, position, shirtNumber } = req.body;

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
  const footballerExist = await FavFootballers.findOne({ fullName: fullName });

  if (footballerExist !== null) {
    return res
      .status(400)
      .json({ message: `An account already exist ${fullName} already exist.` });
  }

  try {
    const footballersCreated = await FavFootballers.create({
      fullName: fullName,
      club: club,
      position: position,
      shirtNumber: shirtNumber,
    });

    console.log(footballersCreated);
    res.status(201).json({ message: "Registration was successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sorry an error occured" });
  }
}

export default registerPlayer;
