const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.CONN, {useNewUrlParser: true}, (error) => {
    if (error) {
        console.log("Error connecting to database:", error);
    } 
    else {
        console.log("Successful connection to database!");
    }
});

app.get('/', (req, res) => res.send('Hello World'));

app.listen(process.env.PORT, () => console.log("server listening on port 3000"))