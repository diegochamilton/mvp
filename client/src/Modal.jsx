import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


const predictScore = (team1, team2) => {
  console.log("this is team1: ", team1)
};

const Modal = ({open, children, onClose, teams}) => {
  if (!open) return null;
  const [matchResults, setMatchResults] = useState({});
  useEffect(() => {
    axios.get(`/odds?team1=${teams.team1.TeamID}&team2=${teams.team2.TeamID}`)
    .then(({data}) => setMatchResults(data))
    .catch(err => console.log(err))
  }, [])

  console.log(matchResults)
  const home = teams.team2;
  const away = teams.team1;


  return ReactDOM.createPortal(
    <>
      <div className="overlay"/>
      <div className="modal">
        <button onClick={onClose}>x</button>
      </div>
      <div className="information">
        <a href="https://betway.com/en/sports/grp/basketball/usa/nba" target="_blank">
          <div style={{cursor: "pointer"}}><u>I want to place a bet</u></div>
        </a>
      </div>
    </>,
    document.getElementById("portal")
  )
}
export default Modal;