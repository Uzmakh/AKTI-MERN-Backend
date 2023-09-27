const express = require('express');
const User = require('../../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// const createNotesController = require('../../controllers/notesControllers/createNotesController');


// Create a User using: POST "/api/getNotesRoute/"(doesn't require auth)
router.post('/', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);

})
module.exports = router