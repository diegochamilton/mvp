const express = require("express");
const parser = require("body-parser");
const { getStats, getTeams } = require("./helpers/apiHelpers.js");
// const app = express();
const PORT = process.env.PORT || 8000;
const mockData = require("../mockData.js");
const { getMatchResults } = require("./helpers/statsGenerator.js");

let app = express();
app.use(parser.json());
// app.use(express.json());
app.use(express.static(__dirname + "/../public"));

app.get("/teams", (req, res) => {
  res.send(mockData);
  // getTeams()
  //   .then(({ data }) => {
  //     console.log(data);
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.sendStatus(500);
  //   });
});

app.get("/odds", (req, res) => {
  const home = req.query.team2;
  const away = req.query.team1;
  const data = getMatchResults(home, away);
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
