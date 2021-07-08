const express = require("express");
const parser = require("body-parser");
const { getStats, getTeams } = require("./helpers/apiHelpers.js");
// const app = express();
const PORT = 8000;

let app = express();
app.use(parser.json());
// app.use(express.json());
app.use(express.static(__dirname + "/../public"));

app.get("/teams", (req, res) => {
  getTeams()
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get("/odds", (req, res) => {});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
