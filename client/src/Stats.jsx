import React, { useEffect, useState } from "react";

const Stats = ({home, away, results}) => {
  if (Object.keys(results).length === 0) return null;
  const stats = [
    "Field goals",
    "Three pointers",
    "Free throws",
    "Rebounds",
    "Offensive Rebounds",
    "Assists",
    "Blocks",
    "Steals",
    "Turnovers"
  ]
  const values = [
    "fg",
    "3p",
    "ft",
    "rebounds",
    "offRebounds",
    "assists",
    "blocks",
    "steals",
    "turnovers",
  ]
  let handicap = results.home.handicap;
  if (handicap % 1 === 0) {
    handicap += 0.5
  }
  return (
    <>
    <div className="scoreTable">
      <div className="awayStats">
        <div className="modalLogo firstStatLine">
          <img
            className="logo"
            src={away.WikipediaLogoUrl}
            alt="team logo"
          ></img>
        </div>
        {values.map((value, i) => <CreateAwayStat value={value} away={results.away} key={i}/>)}
      </div>
      <div className="statsName">
        <div className="firstStatLine padFix"><h2>{results.away.points} - {results.home.points}</h2></div>
        {stats.map((stat, i) => <CreateStat name={stat} key={i}/>)}
      </div>
      <div className="homeStats">
        <div className="modalLogo firstStatLine">
          <img
            className="logo"
            src={home.WikipediaLogoUrl}
            alt="team logo"
          ></img>
        </div>
        {values.map((value, i) => <CreateHomeStat value={value} home={results.home} key={i}/>)}
      </div>
    </div>
    <div className="modalFooter">
      <span>Handicap: {handicap}</span>
      <div>
            <a href="https://betway.com/en/sports/grp/basketball/usa/nba" target="_blank">
              <div style={{cursor: "pointer"}}><u>Place a Bet</u></div>
            </a>
          </div>
    </div>
    </>
  )
}

const CreateStat = ({name}) => {
  return <div className="line">{name}</div>
}

const CreateHomeStat = ({value, home}) => {
  return <div className="line">{home[value]}</div>
}

const CreateAwayStat = ({value, away}) => {
  return <div className="line"> {away[value]}</div>
}

export default Stats;