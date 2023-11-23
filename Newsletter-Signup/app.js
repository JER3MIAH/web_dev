const express = require('express');
const bodyParser = require('body-parser');


const app = express(3000);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});



app.listen(3000, function () {
    console.log("Server started at port 3000");
});