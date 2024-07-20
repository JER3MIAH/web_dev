import express from "express";

const app = express();
const port = 3000;

//? Custom middleware
function logger(req, res, next) {
  console.log(`method: ${req.method}\nurl: ${req.url}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
