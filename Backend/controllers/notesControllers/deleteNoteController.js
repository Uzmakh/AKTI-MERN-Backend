const express = require('express');
const Note = require('../../models/Notes'); // Corrected path and require statement
const { validationResult } = require("express-validator");

const deleteNoteController = async (req, res) => {
    try {
        const noteId = req.params.id;
        const existingNote = await Note.findById(noteId);
        // if note not found
        if (!existingNote) {
            return res.status(404).json({ error: "Note not found" });
        } else {
            // if note found
            const deletedNote = await Note.findByIdAndDelete(noteId)
            return res.json({
                success: "note deleted successfully",
                deletedNote
            })
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = deleteNoteController