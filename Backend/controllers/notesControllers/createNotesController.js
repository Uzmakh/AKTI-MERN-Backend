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
        const { title, description, tags } = req.body;  // Destructure the request body
        const note = new Note({
            title,
            description,
            tags,
        });
        await note.save(); // command to save in MongoDB
        return res.status(201).json(note);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' }); // Handle other errors
    }
}

module.exports = createNotesController;