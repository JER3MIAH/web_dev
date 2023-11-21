const express = require("express");
const https = require("https");
const apiKey = require("./constants")

const app = express();



app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=" + apiKey + "&id=524901";
    https.get(url, function (resposnse) {
        console.log(resposnse);
    });


    res.send("Hey man!");
})



app.listen(3030, function () {
    console.log("Server running at port 3030");
});