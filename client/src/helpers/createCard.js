import React from "react";

const randomDate = () => {
  var matchTimes = [
    "16:00",
    "18:30",
    "19:00",
    "20:00",
    "20:30",
    "21:00",
    "22:00",
  ];
  return matchTimes[Math.floor(Math.random() * matchTimes.length)];
};

const Game = ({ team1, team2, onClick }) => {
  return (
    <div className="gameContainer">
      <div className="teamContainer">
        <div className="awayTeam">
          <span>
            {team1.City} {team1.Name} {"    "}
          </span>
          <div className="logoContainer">
            <img
              className="logo"
              src={team1.WikipediaLogoUrl}
              alt="team logo"
            ></img>
          </div>
        </div>
        <div className="date">{randomDate()}</div>
        <div className="homeTeam">
          <div className="logoContainer">
            <img
              className="logo"
              src={team2.WikipediaLogoUrl}
              alt="team logo"
            ></img>
          </div>
          <span>
            {team2.City} {team2.Name}
          </span>
        </div>
      </div>
      <div className="button">
        <button>Predict Score</button>
      </div>
    </div>
  );
};

export default Game;
