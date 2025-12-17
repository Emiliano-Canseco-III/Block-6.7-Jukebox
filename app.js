import express from "express";
import playlistRouter from "./api/playlists.js";
import trackRouter from "./api/tracks.js";

const app = express();
app.use(express.json());

app.use("/playlists", playlistRouter);
app.use("/tracks", trackRouter);
export default app;
