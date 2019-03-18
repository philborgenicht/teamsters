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
    let basketballTeamId=e.target.basketballTeamId.value.split(', ')[1]
    this.setState({basketballTeamId:basketballTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${basketballTeamId}`)
    const data= await results.json()
    const basketballGames= data.events
    this.setState({basketballGames:basketballGames,viewBasketballTeamGames:true})
    console.log(basketballTeamId)
  }

  searchFootballTeamEvents=async(e)=>{
    e.preventDefault()
    let footballTeamId=e.target.footballTeamId.value.split(', ')[1]
    this.setState({footballTeamId:footballTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${footballTeamId}`)
    const data= await results.json()
    const footballGames=data.events
    this.setState({footballGames:footballGames,viewFootballTeamGames:true})
console.log(data)
  }

  searchBaseballTeamEvents=async(e)=>{
    e.preventDefault()
    let baseballTeamId=e.target.baseballTeamId.value.split(', ')[1]
    this.setState({baseballTeamId:baseballTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${baseballTeamId}`)
    const data= await results.json()
    const baseballGames=data.events
    this.setState({baseballGames:baseballGames,viewBaseballTeamGames:true})
  }

  searchHockeyTeamEvents=async(e)=>{
    e.preventDefault()
    let hockeyTeamId=e.target.hockeyTeamId.value.split(', ')[1]
    this.setState({hockeyTeamId:hockeyTeamId})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${hockeyTeamId}`)
    const data= await results.json()
    const hockeyGames=data.events
    this.setState({hockeyGames:hockeyGames,viewHockeyTeamGames:true})
  }

  searchLeagueEvents=async(e)=>{
    e.preventDefault()
    let leagueId=e.target.leagueId.value.split(', ')[1]
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
      <div className='row'>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS2}>Stats2</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS3}>Stats3</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS4}>Stats4</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS5}>Stats5</Link>
      </button>
      </div>

      </div>
      <hr/>
<h2><u>Search Events By League:</u></h2>
      <div className='row justify-content-center'>
            <form onSubmit={this.searchLeagueEvents}>
                <div class="form-group">
                        <label for="league">Select a League</label>
                        <select onChange={this.setLeague} class="form-control" id="leagueId">
                          <option>MLB, 4424</option>
                          <option>NBA, 4387</option>
                          <option>NFL, 4391</option>
                          <option>NHL, 4380</option>

                        </select>

                        <hr/>
                </div>
                <button className='btn btn-block btn-dark' type = 'submit'> Search </button>
                <hr/>
                                <button className='btn btn-block btn-dark' onClick={this.clearLeagueGames}>Clear</button>
                </form>
                <br/>

      </div>
      <hr/>
<h2> <u>Search Basketball Events</u></h2>

      <div className='row justify-content-center'>
      <form onSubmit={this.searchBasketballTeamEvents}>
      <label htmlFor="basketballTeamId">Select a Team</label>
      <select id='basketballTeamId'>
      {this.state.basketballTeams.map(team=> <option id='basketballTeamId'>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button className='btn  btn-dark search-clear' type="submit"> search </button>
      </form>

      <br/>
      <button className='btn  btn-dark search-clear' onClick={this.clearBasketballGames}>clear</button>
      </div>
<hr/>
<h2> <u>Search Baseball Events</u></h2>
      <div className='row justify-content-center'>
      <form onSubmit={this.searchBaseballTeamEvents}>
      <label htmlFor="baseballTeamId">Select a Team</label>
      <select id='baseballTeamId'>
      {this.state.baseballTeams.map(team=> <option id='baseballTeamId'>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button className='btn  btn-dark search-clear' type="submit"> search </button>
      </form>
<br/>
<button className='btn  btn-dark search-clear' onClick={this.clearBaseballGames}>clear</button>
      </div>
<hr/>
<h6> The NFL season has recently ended, please check back this fall !</h6>
<h2> <u>Search Football Events</u></h2>

      <div className='row justify-content-center'>
      <form onSubmit={this.searchFootballTeamEvents}>
      <label htmlFor="footballTeamId">Select a Team</label>
      <select disabled id='footballTeamId'>
      {this.state.footballTeams.map(team=> <option id='footballTeamId'>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button disabled className='btn  btn-dark search-clear' type="submit"> search </button>
      </form>

<br/>
<button disabled className='btn  btn-dark search-clear' onClick={this.clearFootballGames}>clear</button>
      </div>

<hr/>
<h2> Search Hockey Events</h2>
      <div className='row justify-content-center'>
      <form onSubmit={this.searchHockeyTeamEvents}>
      <label htmlFor="hockeyTeamId">Select a Team</label>
      <select id='hockeyTeamId'>
      {this.state.hockeyTeams.map(team=> <option id='hockeyTeamId'>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<button className='btn  btn-dark search-clear' type="submit"> search </button>
      </form>
<br/>
<button className='btn  btn-dark search-clear' onClick={this.clearHockeyGames}>clear</button>
      </div>

<hr/>
<div className='row'>
{this.state.viewLeagueGames?
<div>
{this.state.leagueGames.map(game=>
  <div>
<div className='row'>

<div className='col-3 list-group-item'>
Game Date: {game.dateEvent}
</div>
<div className='col-3 list-group-item'>
Game Time: {game.strTime}
</div>

      <div className='col-6 list-group-item'>
      <div className='row'>
      Competitors:
      </div>
      <div className='row'>
      {game.strEvent}
      </div>
      </div>
      <div className='col-3 list-group-item'>
      Home Team: {game.strHomeTeam}
      </div>
      <div className='col-3 list-group-item'>
      Away Team: {game.strAwayTeam}
      </div>


      <div className='col-3 list-group-item'>
      Season: {game.strSeason}
      </div>




</div>
<br/><br/>
<br/>
<hr/>

</div>)}

</div>

:''}

</div>


<div className='row'>

<div className='col-6'>
{this.state.viewFootballTeamGames?
<div>
{this.state.footballGames.map(game=>
<div className='game-data'>

  <div className='row'>


  <div className='col-6 list-group-item'>
  Game Date:{game.dateEvent}
  </div>
  <div className='col-6 list-group-item'>
  Game Time:{game.strTime}
  </div>


  <div className='col-12 list-group-item'>
  Competitors:{game.strEvent}
  </div>




  <div className='col-6 list-group-item'>
  Season:{game.strSeason}
  </div>
  <div className='col-6 list-group-item'>
  Away Team:{game.strAwayTeam}
  </div>

  <div className='col-6 list-group-item'>
  Home Team:{game.strHomeTeam}
  </div>

  <div className='col-12'>
  Link:{game.strThumb}
  </div>




</div>
<br/><hr/>
</div>)}

</div>
:''}
</div>

<div className='col-6'>
{this.state.viewBaseballTeamGames?
<div>
{this.state.baseballGames.map(game=>
<div className='game-data'>

<div className='row'>

      <div className='col-6 list-group-item'>
      Game Date:{game.dateEvent}
      </div>
      <div className='col-6 list-group-item'>
      Game Time:{game.strTime}
      </div>


      <div className='col-12 list-group-item'>
      Competitors:{game.strEvent}
      </div>

      <div className='col-6 list-group-item'>
      {game.strLeague}
      </div>


      <div className='col-6 list-group-item'>
      Season:{game.strSeason}
      </div>
      <div className='col-6 list-group-item'>
      Away Team:{game.strAwayTeam}
      </div>

      <div className='col-6 list-group-item'>
      Home Team:{game.strHomeTeam}
      </div>





</div>

<br/><hr/>

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
  <div className='game-data'>
  <div className='row'>
  <div className='col-6 list-group-item'>
  Game Date:{game.dateEvent}
  </div>
  <div className='col-6 list-group-item'>
  Game Time:{game.strTime}
  </div>


  <div className='col-12 list-group-item'>
  Competitors:{game.strEvent}
  </div>

  <div className='col-6 list-group-item'>
  {game.strLeague}
  </div>


  <div className='col-6 list-group-item'>
  Season:{game.strSeason}
  </div>
  <div className='col-6 list-group-item'>
  Away Team:{game.strAwayTeam}
  </div>

  <div className='col-6 list-group-item'>
  Home Team:{game.strHomeTeam}
  </div>



</div>
<br/><hr/>

  </div>
)}
</div>
:''}
</div>

<div className='col-6'>
{this.state.viewBasketballTeamGames?
<div>
{this.state.basketballGames.map(game=>
<div className='game-data'>
<div className='row'>
<div className='col-6 list-group-item'>
Game Date:{game.dateEvent}
</div>
<div className='col-6 list-group-item'>
Game Time:{game.strTime}
</div>


<div className='col-12 list-group-item'>
Competitors:{game.strEvent}
</div>

<div className='col-6 list-group-item'>
{game.strLeague}
</div>


<div className='col-6 list-group-item'>
Season:{game.strSeason}
</div>
<div className='col-6 list-group-item'>
Away Team:{game.strAwayTeam}
</div>

<div className='col-6 list-group-item'>
Home Team:{game.strHomeTeam}
</div>





</div>
<br/><hr/>

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
