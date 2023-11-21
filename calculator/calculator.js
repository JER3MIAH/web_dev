
const express = require('express');
const bodyParser = require("body-parser");

const app = express(3000);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);
    let bmi = weight / (height ** 2);
    res.send("Your body mass index is " + bmi);
});

app.post("/", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(num1 + " + " + num2 + " is " + result);
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});
