import express from "express";
import axios from "axios"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        const jsonString = JSON.stringify(result.data);
        const data = JSON.parse(jsonString);
        res.render("index.ejs", { user: data.username, secret: data.secret });
    } catch (error) {
        console.log(error);
    }

});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});