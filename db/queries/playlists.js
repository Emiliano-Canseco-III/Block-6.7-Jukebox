import db from "#db/client";

export async function createPlaylist(name) {
  const sql = `
    INSERT INTO playlists
        (name)
    VALUES
        ($1)
    RETURNING *
    `;
  const {
    rows: [playlist],
  } = await db.query(sql, [name]);
  return playlist;
}
