import express from "express";
import { getNotes, createNote, deleteNote } from "../controllers/notesController.js";
const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", createNote);
router.delete("/notes/:id", deleteNote);

export default router;
