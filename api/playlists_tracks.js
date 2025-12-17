import express from "express";
const router = express.Router();

export default router;

import { createPlaylistTrack } from "#db/queries/playlists_tracks";

router.post("/playlists/:id/tracks", async (req, res, next) => {
  try {
    const playlistId = req.params.id;
    const { trackId } = req.body;

    const playListTrack = await createPlaylistTrack(playlistId, trackId);

    res.status(201).send(playListTrack);
  } catch (error) {
    next(error);
  }
});
