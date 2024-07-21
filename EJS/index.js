import express from "express";

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const d = new Date();
    let day = d.getDay();
    const isWeekDay = day !== 0 && day !== 6;

    res.render(
        "index.ejs",
        {
            dayType: isWeekDay ? "a weekday" : "a weekend",
            advice: isWeekDay ? "time to work hard" : "time to have fun",
        },
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});