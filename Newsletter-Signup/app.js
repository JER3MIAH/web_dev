const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');


const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});



app.listen(3000, function () {
    console.log("Server started at port 3000");
});