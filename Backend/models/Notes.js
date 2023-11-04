const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: ["general"]
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Notes', NoteSchema);