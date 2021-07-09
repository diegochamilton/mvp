import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Stats from "./Stats.jsx";

const Modal = ({open, children, onClose, teams}) => {
  if (!open) return null;
  const [matchResults, setMatchResults] = useState({});
  useEffect(() => {
    axios.get(`/odds?team1=${teams.team1.TeamID}&team2=${teams.team2.TeamID}`)
    .then(({data}) => setMatchResults(data))
    .catch(err => console.log(err))
  }, [])
  const home = teams.team2;
  const away = teams.team1;
  return ReactDOM.createPortal(
    <>
      <div className="overlay"/>
      <div className="modal">
        <button onClick={onClose}>x</button>
        <div className="information">
          <Stats home={home} away={away} results={matchResults}/>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}
export default Modal;