const express = require("express");
const parser = require("body-parser");
const { getStats, getTeams } = require("./helpers/apiHelpers.js");
// const app = express();
const PORT = 8000;
const mockData = require("../mockData.js");

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
  const odds = {
    home: {
      low: 95,
      high: 120,
    },
    away: {
      low: 90,
      high: 112,
    },
  };
  const home = req.body.team2;
  const away = req.body.team1;
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
