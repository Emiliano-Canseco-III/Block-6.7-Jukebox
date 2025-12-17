import express from "express";
const router = express.Router();

import { getTrackById, getTracks } from "#db/queries/tracks";

router.get("/", async (req, res) => {
  const tracks = await getTracks();
  res.send(tracks);
});

router.param("id", async (req, res, next, id) => {
  if (isNaN(id)) {
    return res.status(400).send("ID must be a number.");
  }

  const track = await getTrackById(id);
  if (!track) {
    return res.status(404).send("Track does not exist.");
  }

  req.track = track;
  next();
});

router.get("/:id", (req, res) => {
  res.send(req.track);
});

export default router;
