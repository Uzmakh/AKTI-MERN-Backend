const express = require('express');
const router = express.Router();

const notesRoutes = require('./notesRoutes/notesRoute')

// Define base routes for your modules
router.use('/api/v1/', notesRoutes);


module.exports = router;