// ES-5 Import Syntax
const express = require("express");
const connectToMongodb = require("./config/db");
const cors = require('cors');
const { config } = require("dotenv");
const Note = require("./models/Notes");
config(); // Load environment variables from .env file

connectToMongodb();
const app = express();        //initialize
app.use(cors())
const PORT = process.env.PORT;

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

// \ notes routes
app.use('/', require('./routes/index')); // routes/index.js

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});