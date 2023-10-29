const express = require('express');
const Note = require('../../models/Notes'); // Corrected path and require statement
const { validationResult } = require("express-validator");

const updateNoteController = async (req, res) => {
    // first approach
    // try {
    //     // dynamically catching id from url
    //     const noteId = req.params.id;
    //     const existingNote = await Note.findById(noteId);
    //     // checking if existing note not found
    //     if (!existingNote) {
    //         return res.status(404).json({ error: "Note not found" });
    //     }
    //     existingNote.title = req.body.title;
    //     existingNote.description = req.body.description;
    //     existingNote.tags = req.body.tags;
    //     await existingNote.save();
    //     return res.status(200).json(existingNote);
    // } catch (error) {
    //     res.send(error);
    // }

    // second approach - findByIdAndUpdate

    try {
        const noteId = req.params.id;
        const updatedNote = await Note.findByIdAndUpdate(
            noteId,
            {
                title: req.body.title,
                description: req.body.description,
                tags: req.body.tags
            },
            { new: true }
        );
        // and if note not found
        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }
        return res.status(200).json(updatedNote);
    } catch (error) {
        response.send(error)
    }

}

module.exports = updateNoteController