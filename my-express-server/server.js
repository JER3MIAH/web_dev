const express = require("express");

const app = express(3000);

app.listen(3000, function () {
    console.log("server started at port: 3000");
});