const express = require('express');
const User = require('../../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// const createNotesController = require('../../controllers/notesControllers/createNotesController');


// Create a User using: POST "/api/getNotesRoute/"(doesn't require auth)
router.post('/', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 6 })],
  (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(user => res.json(user))
      .catch(err => {
        console.log(err)
        res.json({ error: 'Please enter a unique value for email' })
      })
    res.send(req.body);

  })
module.exports = router