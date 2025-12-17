import express from "express";
const router = express.Router();
export default router;

import { createPlaylist, getPlaylists } from "#db/queries/playlists";
import { getPlaylistById } from "#db/queries/playlists";
import { getTracksByPlaylistId } from "#db/queries/tracks";
