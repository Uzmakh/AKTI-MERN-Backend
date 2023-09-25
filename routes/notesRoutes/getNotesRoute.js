const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const { body } = require('express-validator');
const createNotesController = require('../controllers/notesControllers/createNotesController');


// Create a User using : POST "/api/auth/" (doesn't require auth)
router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);
})
module.exports = router