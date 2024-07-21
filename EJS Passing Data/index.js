import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const n = req.body["fName"].length + req.body["lName"].length;
    const data = {
        numOfLetters: n,
    }
    res.render("index.ejs", data);
});

app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});
