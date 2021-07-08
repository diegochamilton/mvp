const axios = require("axios");
const { API_KEY, ENDPOINT } = require("../../config.js");

const getStats = () => {
  return axios({
    method: "get",
    url: `${ENDPOINT}/TeamSeasonStats/2021?key=${API_KEY}`,
  });
};

const getTeams = () => {
  return axios({
    method: "get",
    url: `${ENDPOINT}/teams?key=${API_KEY}`,
  });
};

module.exports.getStats = getStats;
module.exports.getTeams = getTeams;
