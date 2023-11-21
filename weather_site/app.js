const apiKey = require("./constants");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=" + apiKey + "&id=524901&units=metric";

    https.get(url, function (response) {
        let data = "";

        response.on("data", function (chunk) {
            data += chunk;
        });

        response.on("end", function () {
            try {
                const weatherData = JSON.parse(data);
                const temp = weatherData.list[0].main.temp;
                const des = weatherData.list[0].weather[0].description;
                const weatherIcon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
                res.write("<h1>The temperature in london is " + temp + " degrees celcius</h1>");
                res.write("<p>The weather description is currently: " + des + " </p>");
                res.write(weatherIcon);
                res.send();

                console.log(temp);
                console.log(des);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        });
    });
});

app.listen(3030, function () {
    console.log("Server running at port 3030");
});
