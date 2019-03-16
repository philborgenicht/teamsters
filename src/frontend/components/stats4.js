import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats4 extends Component{
state={
basketballTeamId:'',
footballTeamId:'',
baseballTeamId:'',
hockeyTeamId:'',
leagueId:'',
basketballTeams:[],
baseballTeams:[],
footballTeams:[],
hockeyTeams:[],
viewHockeyTeamGames:false,
viewBaseballTeamGames:false,
viewBasketballTeamGames:false,
viewFootballTeamGames:false,
viewLeagueGames:false,
basketballGames:[],
baseballGames:[],
footballGames:[],
hockeyGames:[]
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
  searchBasketballTeamEvents=async(e)=>{
    e.preventDefault()
    let basketballTeamId=e.target.basketballTeamId.value.split(' ')[1]
    this.setState({basketballTeamId:basketballTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${basketballTeamId}`)
    const data= await results.json()
    const basketballGames= data.events
    this.setState({basketballGames:basketballGames,viewBasketballTeamGames:true})
  }

  searchFootballTeamEvents=async(e)=>{
    e.preventDefault()
    let footballTeamId=e.target.footballTeamid.value.split(' ')[1]
    this.setState({footballTeamId:footballTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${footballTeamId}`)
    const data= await results.json()
    const footballGames=data.events
    this.setState({footballGames:footballGames,viewFootballTeamGames:true})
  }

  searchBaseballTeamEvents=async(e)=>{
    e.preventDefault()
    let baseballTeamId=e.target.baseballTeamId.value.split(' ')[1]
    this.setState({baseballTeamId:baseballTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${baseballTeamId}`)
    const data= await results.json()
    const baseballGames=data.events
    this.setState({baseballGames:baseballGames,viewBaseballTeamGames:true})
  }

  searchHockeyTeamEvents=async(e)=>{
    e.preventDefault()
    let hockeyTeamId=e.target.hockeyTeamId.value.split(' ')[1]
    this.setState({hockeyTeamId:hockeyTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${hockeyTeamId}`)
    const data= await results.json()
    const hockeyGames=data.events
    this.setState({hockeyGames:hockeyGames,viewHockeyTeamGames:true})
  }

  searchLeagueEvents=async(e)=>{
    e.preventDefault()
    let leagueId=e.target.leagueId.value.split(' ')[1]
    this.setState({leagueId:leagueId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${leagueId}`)
    const data= await results.json()
    const leagueGames=data.events
    this.setState({leagueGames:leagueGames,viewLeagueGames:true})
  }


clearHockeyGames=()=>{
  this.setState({viewHockeyTeamGames:false})
}

clearFootballGames=()=>{
  this.setState({viewFootballTeamGames:false})
}

clearBaseballGames=()=>{
  this.setState({viewBaseballTeamGames:false})
}

clearBasketballGames=()=>{
  this.setState({viewBasketballTeamGames:false})
}

clearLeagueGames=()=>{
  this.setState({viewLeagueGames:false})
}




  render(){
    return(

      <div className='container'>
      //leaguesearch
      <div className='row'>
      <form onSubmit={this.searchLeagueEvents}>
      <div class="form-group">
              <label for="league">SELECT A LEAGUE</label>
              <select onChange={this.setLeague} class="form-control" id="league">
                <option>MLB, 4424</option>
                <option>NBA, 4387</option>
                <option>NFL, 4391</option>
                <option>NHL, 4380</option>

              </select>
              <button type = 'submit'> search </button>
            </div>

      </form>
      <button onClick={this.clearLeagueGames}>clear</button>
      </div>
      //basketball
      <div className='row'>
      <form onSubmit={this.searchBasketballTeamEvents}>
      <select id='basketballTeamId'>
      {this.state.basketballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button type="submit"> search </button>
      </form>
      <button onClick={this.clearBasketballGames}>clear</button>
      </div>

      //baseball
      <div className='row'>
      <form onSubmit={this.searchBaseballTeamEvents}>
      <select id='baseballTeamId'>
      {this.state.baseballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button type="submit"> search </button>
      </form>

<button onClick={this.clearBaseballGames}>clear</button>
      </div>

      //football
      <div className='row'>
      <form onSubmit={this.searchFootballTeamEvents}>
      <select id='footballTeamId'>
      {this.state.footballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button type="submit"> search </button>
      </form>

<button onClick={this.clearFootballGames}>clear</button>
      </div>


      //hockey
      <div className='row'>
      <form onSubmit={this.searchHockeyTeamEvents}>
      <select id='hockeyTeamId'>
      {this.state.hockeyTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button type="submit"> search </button>
      </form>

<button onClick={this.clearHockeyGames}>clear</button>
      </div>


<div className='row'>
{this.state.viewLeagueGames?
<div>
{this.state.leagueGames.map(game=>
<div>

{idEvent}
{strEvent}
{strFilename}
{strSport}
{idLeague}
{strLeague}
{strSeason}
{strHomeTeam}
{strAwayTeam}
{dateEvent}
{strTime}
{idHomeTeam}
{idAwayTeam}





</div>)}
</div>
:''}
</div>



<div className='row'>

<div className='col-6'>
{this.state.viewFootballTeamGames?
<div>
{this.state.footballGames.map(game=>
<div>

{idEvent}
{strEvent}
{strSport}
{idLeague}
{strLeague}
{strSeason}
{strHomeTeam}
{strAwayTeam}
{dateEvent}
{strTime}
{idHomeTeam}
{idAwayTeam}
{strThumb}






</div>)}

</div>
:''}
</div>

<div className='col-6'>
{this.state.viewBaseballTeamGames?
<div>
{this.state.baseballGames.map(game=>
<div>

{idEvent}
{strEvent}
{strSport}
{idLeague}
{strLeague}
{strSeason}
{strHomeTeam}
{strAwayTeam}
{dateEvent}
{strTime}
{idHomeTeam}
{idAwayTeam}
{strThumb}







</div>)}
</div>
:''}
</div>

</div>

<div className='row'>

<div className='col-6'>
{this.state.viewHockeyTeamGames?
<div>
{this.state.hockeyGames.map(game=>
  <div>

  {idEvent}
  {strEvent}
  {strSport}
  {idLeague}
  {strLeague}
  {strSeason}
  {strHomeTeam}
  {strAwayTeam}
  {dateEvent}
  {strTime}
  {idHomeTeam}
  {idAwayTeam}
  {strThumb}



  </div>
)}
</div>
:''}
</div>

<div className='col-6'>
{this.state.viewBasketballTeamGames?
<div>
{this.state.basketballGames.map(game=>
<div>

{idEvent}
{strEvent}
{strSport}
{idLeague}
{strLeague}
{strSeason}
{strHomeTeam}
{strAwayTeam}
{dateEvent}
{strTime}
{idHomeTeam}
{idAwayTeam}
{strThumb}





</div>)}
</div>
:''}
</div>

</div>


  </div>
)
}
}

export default Stats4;
