import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats5 extends Component{
state={
  league:'',
  teams:null,
  viewTeams:false
}

//search all teams by league
  searchTeams=async(e)=>{
    e.preventDefault()
    let league=e.target.league.value
    this.setState({league:league})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`)
    const data= await results.json()
console.log(data)
const teams=data.teams
this.setState({teams:teams})
console.log(this.state.teams)
this.setState({viewTeams:true})

  }



//




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




      {this.state.viewTeams?
        <div>



{this.state.teams.map(team=>
<div>

{team.idTeam}
{team.strTeam}
{team.strTeamShort}
{team.intFormedYear}

{team.strSport}
{team.strLeague}

{team.strStadium}
{team.strRSS}

{team.strStadiumThumb}
{team.strStadiumDescription}

{team.strStadiumLocation}
{team.intStadiumCapacity}

{team.strWebsite}
{team.strFacebook}

{team.strTwitter}
{team.strInstagram}

{team.strDescriptionEN}
{team.strGender}

{team.strCountry}
{team.strTeamBadge}



{team.strTeamJersey}
{team.strTeamLogo}

{team.strTeamFanart1}
{team.strTeamFanart2}
{team.strTeamFanart3}
{team.strTeamFanart4}
{team.strTeamBanner}
{team.strYouTube}
{team.strManager}
{team.strDivision}










</div>

)}


        </div> :''}






  </div>
)
}
}

export default Stats5;
