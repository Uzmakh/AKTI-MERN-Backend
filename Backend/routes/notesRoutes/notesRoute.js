const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
// mongoose model
const Note = require("../../models/Notes");
const createNotesController = require("../../controllers/notesControllers/createNotesController");
const getAllNotesController = require("../../controllers/notesControllers/getAllNotesController");



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

module.exports = router