import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats3 extends Component{
state={
  teamId:'',
  players:null,
  viewPlayers:false,
  hockeyTeams:[],
  footballTeams:[],
  baseballTeams:[],
  basketballTeams:[],
  footballTeamId:'',
  hockeyTeamId:'',
  baseballTeamId:'',
  basketballTeamId:'',
  hockeyPlayers:[],
  footballPlayers:[],
  baseballPlayers:[],
  basketballPlayers:[],
  footballteam:'',
  hockeyteam:'',
  baseballteam:'',
  basketballteam:''

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
    let hockeyTeamId=e.target.hockeyTeam.value.split(', ')[0]
    let footballTeamId=e.target.footballTeam.value.split(', ')[0]
    let baseballTeamId=e.target.baseballTeam.value.split(', ')[0]
    let basketballTeamId=e.target.basketballTeam.value.split(', ')[0]

    let hockeyteam=e.target.hockeyTeam.value.split(' ').slice(0, e.target.hockeyTeam.value.split(' ').length-1)
    let footballteam=e.target.footballTeam.value.split(' ').slice(0, e.target.footballTeam.value.split(' ').length-1)
    let baseballteam=e.target.baseballTeam.value.split(' ').slice(0, e.target.baseballTeam.value.split(' ').length-1)
    let basketballteam=e.target.basketballTeam.value.split(' ').slice(0, e.target.basketballTeam.value.split(' ').length-1)

    this.setState({hockeyteam:hockeyteam, baseballteam:baseballteam, footballteam:footballteam, basketballteam:basketballteam})
    this.setState({

      hockeyTeamId:hockeyTeamId,
      footballTeamId:footballTeamId,
      baseballTeamId:baseballTeamId,
      basketballTeamId:basketballTeamId
    })
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${hockeyTeamId}`)
    const data= await results.json()
    let hockeyPlayers=data.player

    const results2 = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${footballTeamId}`)
    const data2= await results2.json()
    let footballPlayers=data2.player

    const results3 = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${baseballTeamId}`)
    const data3= await results3.json()
    let baseballPlayers=data3.player

    const results4 = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${basketballTeamId}`)
    const data4= await results4.json()
    let basketballPlayers=data4.player




this.setState({

basketballPlayers:basketballPlayers,
baseballPlayers:baseballPlayers,
hockeyPlayers:hockeyPlayers,
footballPlayers:footballPlayers

})

this.setState({viewPlayers:true})
console.log(this.state)
  }



//




  render(){
    return(


      <div className='container'>
      <form onSubmit={this.searchTeams}>

      <select className="form-control" id="hockeyTeam">
      {this.state.hockeyTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>

      <select className="form-control" id="footballTeam">
      {this.state.footballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>

      <select className="form-control" id="baseballTeam">
      {this.state.baseballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>

      <select className="form-control" id="basketballTeam">
      {this.state.basketballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>


              <button type = 'submit'> search </button>


      </form>


<div className='row'>

<div className='col-6'>
{this.state.viewPlayers?<div>
<h1>{this.state.hockeyteam}</h1>
  {this.state.hockeyPlayers.map(player=>
  <div className='list-group-item'>
{player.strPlayer}:
{player.strPosition}


  </div>)}</div> :''}
</div>

<div className='col-6'>
{this.state.viewPlayers?<div>
<h1>{this.state.footballteam}</h1>
  {this.state.footballPlayers.map(player=>
  <div className='list-group-item'>

{player.strPlayer}:
{player.strPosition}


  </div>)}</div> :''}
</div>

</div>

<div className='row'>

<div className='col-6'>
{this.state.viewPlayers?<div>
<h1>{this.state.baseballteam}</h1>
  {this.state.baseballPlayers.map(player=>
  <div className='list-group-item'>
{player.strPlayer}:
{player.strPosition}


  </div>)}</div> :''}
</div>

<div className='col-6'>
{this.state.viewPlayers?<div>
<h1>{this.state.basketballteam}</h1>
  {this.state.basketballPlayers.map(player=>
  <div className='list-group-item'>
{player.strPlayer}:
{player.strPosition}


  </div>)}</div> :''}
</div>


</div>



</div>



)
}
}

export default Stats3;
