const express = require("express");
const connectToMongodb = require("./config/db");
// var cors = require('cors');
const { config } = require("dotenv");
const Note = require("./models/Notes");
config(); // Load environment variables from .env file

connectToMongodb();
const app = express();        //initialize
const PORT = process.env.PORT || 5000;

// app.use(cors())
// Middleware to parse JSON data from requests
app.use(express.json());

// default route
app.get("/", (req, res) => {
    res.send("Hello working!");
});
// Just Examples for routes
app.get("/api/v1/signup", (req, res) => {
    res.send("Hello SignUp!");
});
app.get("/api/v1/login", (req, res) => {
    res.send("Hello LogIn!");
});

// Available routes
//  get notes
app.use('/api/v1/', require('./routes/notesRoutes/getNotesRoute'));
// create notes
app.use('/api/v1/', require('./routes/notesRoutes/createNotesRoute'));

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});