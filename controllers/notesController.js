import { db } from "../db.js";

export const getNotes = async (req, res) => {
  const result = await db.query("SELECT * FROM notes ORDER BY id DESC");
  res.json(result.rows);
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  await db.query("INSERT INTO notes (title, content) VALUES ($1,$2)", [title, content]);
  res.json({ message: "Note added" });
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM notes WHERE id=$1", [id]);
  res.json({ message: "Note deleted" });
};
