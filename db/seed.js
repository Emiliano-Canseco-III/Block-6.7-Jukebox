import db from "#db/client";

import { createPlaylist } from "#db/queries/playlists";
import { createTrack } from "#db/queries/tracks";
import { createPlaylistTrack } from "#db/queries/playlists_tracks";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for (let i = 1; i <= 10; i++) {
    await createPlaylist("Playlist " + i);
  }

  for (let i = 1; i <= 20; i++) {
    await createTrack("Track " + i);
  }

  for (let i = 1; i <= 15; i++) {
    const playlistId = 1 + Math.floor(Math.random() * 10);
    const trackId = 1 + Math.floor(Math.random() * 20);
    // Will catches any duplicate errors and keeps the seed running.
    try {
      await createPlaylistTrack(playlistId, trackId);
    } catch (err) {
      console.log(`Skipping duplicate pair: P${playlistId}-T${trackId}`);
    }
  }
}
