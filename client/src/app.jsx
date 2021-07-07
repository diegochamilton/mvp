import React from "react";
import Games from "./Games.jsx";
import axios from "axios";
import KEYS from "../../config.js";

const App = () => {
  axios({
    method: 'get',
    url: `${KEYS.ENDPOINT}/TeamSeasonStats/2021?key=${KEYS.API_KEY}`,
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

  return (
    <div>
      <Games />
    </div>
  )
}

export default App;