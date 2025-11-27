import { db } from "../db.js";

export const getNotes = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notes ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("GET /notes error:", err.message);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const result = await db.query(
      "INSERT INTO notes (title, content) VALUES ($1,$2) RETURNING *",
      [title, content]
    );

    // Send the inserted note back
    res.json(result.rows[0]);
  } catch (err) {
    console.error("POST /notes error:", err.message);
    res.status(500).json({ error: "Failed to create note" });
  }
};


export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID is required" });

    await db.query("DELETE FROM notes WHERE id=$1", [id]);
    res.json({ message: "Note deleted" });
  } catch (err) {
    console.error("DELETE /notes/:id error:", err.message);
    res.status(500).json({ error: "Failed to delete note" });
  }
};
