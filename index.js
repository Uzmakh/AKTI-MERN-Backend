const express = require("express");
const connectToMongodb = require("./config/db");
const { config } = require("dotenv");
const Note = require("./models/Notes");
config(); // Load environment variables from .env file

connectToMongodb()
const app = express();        //initialize
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data from requests
app.use(express.json());

// default route
app.get("/api/v1/contact", (req, res) => {
    res.send("Hello  from Node.js Backend server!");
});

// Available routes
//  get notes
app.use('/api/v1/Notes', require('./routes/notesRoutes/getNotesRoute'));
// create notes
app.use('/api/v1/Notes', require('./routes/notesRoutes/createNotesRoute'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});