const express = require("express");

const app = express(3000);

app.get("/", function (req, res) {
    res.send("<h1>Yooooo</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: jeremiahkenneth0@gmail.com");
});

app.get("/About", function (req, res) {
    res.send("Heyy<br>I am Jeremiah<br>I am quite strong you know.");
});

app.listen(3000, function () {
    console.log("server started at port: 3000");
});