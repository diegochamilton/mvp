import React from "react";
import Game from "./helpers/createCard.js"

const IndividualGame = ({data}) => {
  return (
    <div className="backgroundGame">
      {data.map((team, i) => {
        if (i <= 8) {
          return <Game team1={data[[Math.floor(Math.random() * data.length)]]} team2={data[[Math.floor(Math.random() * data.length)]]} key={team.TeamID}/>
        }
      }
      )}
    </div>
  )
}

export default IndividualGame