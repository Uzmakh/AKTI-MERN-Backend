const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
// mongoose model
const Note = require("../../models/Notes");
const createNotesController = require("../../controllers/notesControllers/createNotesController");
const getAllNotesController = require("../../controllers/notesControllers/getAllNotesController");
const updateNoteController = require("../../controllers/notesControllers/updateNoteController");
const deleteNoteController = require("../../controllers/notesControllers/deleteNoteController");



router.post(
    "/notes",
    [
        body("title").isLength({ min: 1 }),
        body("description").isLength({ min: 1 }),
    ],
    createNotesController
);


// read note
router.get("/notes", getAllNotesController);

// update note route
router.put('/notes/:id', updateNoteController);

// delete note route
router.delete("/notes/:id", deleteNoteController);

module.exports = router