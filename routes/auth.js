const express = require('express');
const router = express.Router();


// Create a User using : POST "/api/auth/" (doesn't require auth)
router.get('/', (req, res) => {
    console.log(req, body);
    res.send("Hello!");

})
module.exports = router