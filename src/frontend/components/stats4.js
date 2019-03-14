import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats4 extends Component{
state={
teamId:'',
leagueId:''
}

componentDidMount = async() => {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba')
  const basketball= await response.json()
  const basketballTeams =  basketball.teams

  const response2 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=mlb')
    const baseball= await response2.json()
  const baseballTeams =  baseball.teams

  const response3 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nfl')
    const football= await response3.json()
  const footballTeams =  football.teams

  const response4 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nhl')
    const hockey= await response4.json()
  const hockeyTeams =  hockey.teams


  this.setState({
    basketballTeams:basketballTeams,
    baseballTeams:baseballTeams,
    footballTeams:footballTeams,
    hockeyTeams:hockeyTeams
  })
}
//search all teams by league
  searchTeams=async(e)=>{
    e.preventDefault()
    let league=e.target.league.value
    this.setState({league:league})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`)
    const data= await results.json()


  }


//
// //Next 5 Events by Team Id
// https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602
//
// Next 15 Events by League Id
// https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328




  render(){
    return(

      <div>
      <form onSubmit={this.searchTeams}>
      <div class="form-group">
              <label for="exampleFormControlSelect1">SELECT A LEAGUE</label>
              <select onChange={this.setLeague} class="form-control" id="league">
                <option>MLB</option>
                <option>NBA</option>
                <option>NFL</option>
                <option>NHL</option>

              </select>
              <button type = 'submit'> search </button>
            </div>

      </form>








  </div>
)
}
}

export default Stats4;
