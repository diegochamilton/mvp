import React from "react";
import Games from "./Games.jsx";
import Bar from "./Bar.jsx"
import Footer from "./Footer.jsx"
import axios from "axios";
import KEYS from "../../config.js";

const App = () => {
  return (
    <div className="app">
      <Bar />
      <div className="games">
      <Games />
      </div>
      <Footer />
    </div>
  )
}

export default App;