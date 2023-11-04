const express = require('express');
const router = express.Router();

const notesRoutes = require('./notesRoutes/notesRoute')
const authRoutes = require('./authRoutes/authRoutes')

// Define base routes for your modules
router.use('/api/v1/', notesRoutes);

// auth routes
router.use('/api/v1/', authRoutes);

module.exports = router;