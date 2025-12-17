import db from "#db/client";

export async function createTrack(name) {
  const sql = `
    INSERT INTO tracks
        (name)
    VALUES
        ($1)
    RETURNING *
    `;
  const {
    rows: [track],
  } = await db.query(sql, [name]);
  return track;
}
