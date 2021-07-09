const getSteals = () => {
  return Math.floor(Math.random() * (8 - 2) + 2);
};

const getBlocks = () => {
  return Math.floor(Math.random() * (7 - 2) + 2);
};

const getTurnovers = () => {
  return Math.floor(Math.random() * (14 - 2) + 2);
};

const getOffensiveRebounds = () => {
  return Math.floor(Math.random() * (16 - 6) + 6);
};

const getTotalRebounds = () => {
  var num = getOffensiveRebounds();
  return num + (Math.floor(Math.random() * (50 - 35) + 35) - num);
};

const getAssists = () => {
  return Math.floor(Math.random() * (23 - 8) + 8);
};

const getPoints = (homeID, awayID) => {
  const ranking = {
    1: 4,
    2: 4,
    3: 7,
    4: 5,
    5: 1,
    6: 7,
    7: 9,
    8: 9,
    9: 5,
    10: 3,
    11: 4,
    12: 1,
    13: 4,
    14: 0,
    15: 9,
    16: 2,
    17: 10,
    18: 2,
    19: 7,
    20: 8,
    21: 6,
    22: 1,
    23: 4,
    24: 4,
    25: 7,
    26: 6,
    27: 7,
    28: 8,
    29: 10,
    30: 3,
  };
  if (ranking[homeID] > ranking[awayID]) {
    var differential = ranking[homeID] - ranking[awayID];
    return {
      homeScore: Math.round(
        Math.floor(Math.random() * (120 - 95) + 95) + differential * 0.75 + 1
      ),
      awayScore: Math.round(
        Math.floor(Math.random() * (115 - 93) + 93) - differential * 0.75
      ),
      handicap: differential * 1.5 + 2,
    };
  } else if (ranking[homeID] < ranking[awayID]) {
    var differential = ranking[awayID] - ranking[homeID];
    return {
      homeScore: Math.round(
        Math.floor(Math.random() * (118 - 95) + 95) - differential * 0.75
      ),
      awayScore: Math.round(
        Math.floor(Math.random() * (115 - 93) + 93) + differential * 0.75 + 2
      ),
      handicap: differential * 1.5 + 1,
    };
  } else {
    return {
      homeScore: Math.round(Math.floor(Math.random() * (120 - 95) + 95)),
      awayScore: Math.round(Math.floor(Math.random() * (115 - 93) + 93)),
      handicap: 4.5,
    };
  }
};

const getFieldGoals = (score) => {
  const triples = adjustPercentage(
    (Math.random() * (0.28 - 0.22) + 0.2) * score,
    3
  );
  const triplesAttempted = Math.round(
    triples / 3 / (Math.random() * (0.36 - 0.31) + 0.31)
  );
  const doubles = adjustPercentage(
    (Math.random() * (0.72 - 0.58) + 0.58) * score,
    2
  );
  const doublesAttempted = Math.round(
    doubles / 2 / (Math.random() * (0.48 - 0.42) + 0.42)
  );
  const freeThrows = score - (triples + doubles);
  const freeThrowsAttempted = Math.round(
    freeThrows / (Math.random() * (0.79 - 0.73) + 0.73)
  );
  return {
    triples: {
      fgm: triples / 3,
      fga: triplesAttempted,
    },
    doubles: {
      fgm: doubles / 2,
      fga: doublesAttempted,
    },
    throws: {
      ftm: freeThrows,
      fta: freeThrowsAttempted,
    },
  };
};

const adjustPercentage = (percentage, adjuster) => {
  percentage = Math.round(percentage);
  const num = percentage % adjuster;
  if (num === 0) return percentage;
  return percentage - num;
};

const getMatchResults = (homeID, awayID) => {
  const score = getPoints(homeID, awayID);
  const homeStats = getFieldGoals(score.homeScore);
  const awayStats = getFieldGoals(score.awayScore);
  return {
    home: {
      points: score.homeScore,
      steals: getSteals(),
      blocks: getBlocks(),
      turnovers: getTurnovers(),
      assists: getAssists(),
      offRebounds: getOffensiveRebounds(),
      rebounds: getTotalRebounds(),
      fga: homeStats.doubles.fga,
      fg: homeStats.doubles.fgm,
      fta: homeStats.throws.fta,
      ft: homeStats.throws.ftm,
      "3p": homeStats.triples.fgm,
      "3pa": homeStats.triples.fga,
      handicap: score.handicap,
    },
    away: {
      points: score.awayScore,
      steals: getSteals(),
      blocks: getBlocks(),
      turnovers: getTurnovers(),
      assists: getAssists(),
      offRebounds: getOffensiveRebounds(),
      rebounds: getTotalRebounds(),
      fga: awayStats.doubles.fga,
      fg: awayStats.doubles.fgm,
      fta: awayStats.throws.fta,
      ft: awayStats.throws.ftm,
      "3p": awayStats.triples.fgm,
      "3pa": awayStats.triples.fga,
      handicap: score.handicap,
    },
  };
};

module.exports.getMatchResults = getMatchResults;
