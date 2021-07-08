import React from "react";
import Games from "./Games.jsx";
import Bar from "./Bar.jsx"
import axios from "axios";
import KEYS from "../../config.js";

const App = () => {
  return (
    <div className="app">
      <Bar />
      <div className="games">

      </div>
      <Games />
    </div>
  )
}

export default App;