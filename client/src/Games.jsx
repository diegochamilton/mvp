import React, { useState } from "react";
import axios from "axios";
import IndividualGame from "./IndividualGame.jsx"

class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  getTeams() {
    return axios.get("/teams")
    .then(({data}) => {
      this.setState({
        data: data
      })
    })
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getTeams()
  }
  render () {
    return (
      <div>
        <IndividualGame data={this.state.data}/>
      </div>
    )
  }
}
export default Games;