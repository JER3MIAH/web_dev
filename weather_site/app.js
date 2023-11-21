const apiKey = require("./constants");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=" + apiKey + "&id=524901";

    https.get(url, function (response) {
        let data = "";

        response.on("data", function (chunk) {
            data += chunk;
        });

        response.on("end", function () {
            try {
                const weatherData = JSON.parse(data);

                // Adjust this based on the structure of the response
                const temp = weatherData.list[0].main.temp;

                console.log(temp);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        });
    });

    res.send("Hey man!");
});

app.listen(3030, function () {
    console.log("Server running at port 3030");
});
