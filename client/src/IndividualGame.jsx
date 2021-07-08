import React from "react";
import Game from "./helpers/createCard.js"

const IndividualGame = ({data}) => {
  console.log(data[1])
  return (
    <div className="backgroundGame">
      {data.map((team, i) => {
        if (i <= 5) {
          return <Game team1={data[[Math.floor(Math.random() * data.length)]]} team2={data[[Math.floor(Math.random() * data.length)]]} key={team.TeamID}/>
        }
      }
      )}
    </div>
  )
}

export default IndividualGame