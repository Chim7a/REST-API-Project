import express from "express";
import registerPlayer from "../controllers/registerPlayers.js";
import allFootballers from "../controllers/getFavFootballers.js";
import updateFootballer from "../controllers/updateFootballer.js";
import deletePlayerFromDB from "../controllers/deletePlayer.js";

const router = express.Router();

router.post("/registerPlayer", registerPlayer);
router.get("/getFootballers", allFootballers);
router.put("/update-footballer/:userId", updateFootballer);
router.delete("/delete-player/:userId", deletePlayerFromDB);
export default router;
