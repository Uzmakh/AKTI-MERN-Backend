const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
// mongoose model
const Note = require("../../models/Notes");
// controllers
const createNotesController = require("../../controllers/notesControllers/createNotesController");
const getAllNotesController = require("../../controllers/notesControllers/getAllNotesController");
const updateNoteController = require("../../controllers/notesControllers/updateNoteController");
const deleteNoteController = require("../../controllers/notesControllers/deleteNoteController");

// taking input from user
// create note route
router.post(
    "/notes",
    [
        body("title").isLength({ min: 1 }),
        body("description").isLength({ min: 1 }),
    ],
    createNotesController
);

// requireSignIn
router.get("/notes", requireSignIn, getAllNotesController);

// read note
router.get("/notes", getAllNotesController);

// update note route
router.put('/notes/:id', updateNoteController);

// delete note route
router.delete("/notes/:id", deleteNoteController);

// get note by id
router.get("/note/:id", getNoteByIdController);

module.exports = router