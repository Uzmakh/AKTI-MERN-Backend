const express = require("express");    // pkg express
const connectToMongodb = require("./config/db");

connectToMongodb()
const app = express();        //initialize
const port = 5000;

app.use(express.json());

// default route
app.get("/", (req, res) => {
    res.send("Hello  from Node.js Backend server!");
});

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});