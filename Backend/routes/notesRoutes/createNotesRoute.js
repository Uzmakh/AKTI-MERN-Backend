const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const createNotesController = require('../../controllers/notesControllers/createNotesController');
const Note = require("../../models/Notes");


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

router.get("/notes", (req, res) => {
    res.send("Hello From Node js Routes folder!");
});

module.exports = router