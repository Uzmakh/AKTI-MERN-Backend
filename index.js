
const express = require("express");    // pkg express
const connectToMongodb = require("./config/db");

connectToMongodb()
const app = express();        //initialize

const port = 5000;         //hard coded port
// default route
app.get("/", (req, res) => {
    res.send("Hello  from Node.js Backend server!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});