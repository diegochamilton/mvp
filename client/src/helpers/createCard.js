import React, { useState } from "react";
import Modal from "../Modal.jsx";
import { BsFillClockFill as Time } from "react-icons/bs";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="gameContainer">
      <div className="teamContainer">
        <div className="awayTeam">
          <span>
            {team1.City} {team1.Name}
          </span>
          <div className="logoContainer">
            <img
              className="logo"
              src={team1.WikipediaLogoUrl}
              alt="team logo"
            ></img>
          </div>
        </div>
        <div className="date">
          <div>
            <Time className="reactIcons" />
          </div>
          <div>{randomDate()}</div>
        </div>
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
        <button onClick={() => setIsOpen(true)}>Predict Score</button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          teams={{ team1, team2 }}
        />
      </div>
    </div>
  );
};

export default Game;
