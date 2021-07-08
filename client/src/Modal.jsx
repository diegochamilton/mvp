import React from "react";
import ReactDOM from "react-dom";

const predictScore = (team1, team2) => {
  console.log("this is team1: ", team1)
};

const Modal = ({open, children, onClose, teams}) => {
  predictScore(teams.team1, teams.team2)
  if (!open) return null

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