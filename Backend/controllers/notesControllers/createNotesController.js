const express = require('express');
const Note = require('../../models/Notes');
const { validationResult } = require('express-validator');

const createNotesController = async (req, res) => {
    // main logic
    // if user sends empty text in req, save it in errors variable
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // if user fills input
    try {
        const note = new Note({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
        });
        await note.save(); // command to save in MongoDB
        return res.status(201).json(note);
    } catch (error) {
    //   if failure
    }
}
// ES5 export syntax
module.exports = createNotesController;
