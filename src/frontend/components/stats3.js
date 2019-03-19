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
    let hockeyTeamId=e.target.hockeyTeam.value.split(', ')[1]
    let footballTeamId=e.target.footballTeam.value.split(', ')[1]
    let baseballTeamId=e.target.baseballTeam.value.split(', ')[1]
    let basketballTeamId=e.target.basketballTeam.value.split(', ')[1]

    let hockeyteam=e.target.hockeyTeam.value.split(', ')[0]
    let footballteam=e.target.footballTeam.value.split(', ')[0]
    let baseballteam=e.target.baseballTeam.value.split(', ')[0]
    let basketballteam=e.target.basketballTeam.value.split(', ')[0]

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



  //sorting
  sortByPlayer=()=>{
    console.log(this.state)
    let currentHockeyPlayers=this.state.hockeyPlayers
    let currentFootballPlayers=this.state.footballPlayers
    let currentBaseballPlayers=this.state.baseballPlayers
    let currentBasketballPlayers=this.state.basketballPlayers

    let newHockeyPlayers=currentHockeyPlayers.sort((player1,player2)=>{
      if (player1.strPlayer<player2.strPlayer){
        return -1
      }
      if (player1.strPlayer>player2.strPlayer){
        return 1
      }
      if (player1.strPlayer===player2.strPlayer){
        return 0
      }
    })

    let newFootballPlayers=currentFootballPlayers.sort((player1,player2)=>{
      if (player1.strPlayer<player2.strPlayer){
        return -1
      }
      if (player1.strPlayer>player2.strPlayer){
        return 1
      }
      if (player1.strPlayer===player2.strPlayer){
        return 0
      }
    })

    let newBaseballPlayers=currentBaseballPlayers.sort((player1,player2)=>{
      if (player1.strPlayer<player2.strPlayer){
        return -1
      }
      if (player1.strPlayer>player2.strPlayer){
        return 1
      }
      if (player1.strPlayer===player2.strPlayer){
        return 0
      }
    })

    let newBasketballPlayers=currentBasketballPlayers.sort((player1,player2)=>{
      if (player1.strPlayer<player2.strPlayer){
        return -1
      }
      if (player1.strPlayer>player2.strPlayer){
        return 1
      }
      if (player1.strPlayer===player2.strPlayer){
        return 0
      }
    })
    this.setState({footballPlayers: newFootballPlayers, basketballPlayers:newBasketballPlayers, baseballPlayers:newBaseballPlayers, hockeyPlayers:newHockeyPlayers})
  }

  sortByPosition=()=>{
    let currentHockeyPlayers=this.state.hockeyPlayers
    let currentFootballPlayers=this.state.footballPlayers
    let currentBaseballPlayers=this.state.baseballPlayers
    let currentBasketballPlayers=this.state.basketballPlayers

    let newHockeyPlayers=currentHockeyPlayers.sort((player1,player2)=>{
      if (player1.strPosition<player2.strPosition){
        return -1
      }
      if (player1.strPosition>player2.strPosition){
        return 1
      }
      if (player1.strPosition===player2.strPosition){
        return 0
      }
    })

    let newFootballPlayers=currentFootballPlayers.sort((player1,player2)=>{
      if (player1.strPosition<player2.strPosition){
        return -1
      }
      if (player1.strPosition>player2.strPosition){
        return 1
      }
      if (player1.strPosition===player2.strPosition){
        return 0
      }
    })

    let newBaseballPlayers=currentBaseballPlayers.sort((player1,player2)=>{
      if (player1.strPosition<player2.strPosition){
        return -1
      }
      if (player1.strPosition>player2.strPosition){
        return 1
      }
      if (player1.strPosition===player2.strPosition){
        return 0
      }
    })

    let newBasketballPlayers=currentBasketballPlayers.sort((player1,player2)=>{
      if (player1.strPosition<player2.strPosition){
        return -1
      }
      if (player1.strPosition>player2.strPosition){
        return 1
      }
      if (player1.strPosition===player2.strPosition){
        return 0
      }
    })
    this.setState({footballPlayers: newFootballPlayers, basketballPlayers:newBasketballPlayers, baseballPlayers:newBaseballPlayers, hockeyPlayers:newHockeyPlayers})
  }
clear=()=>{
  this.setState({footballPlayers:[], baseballPlayers:[], basketballPlayers:[], hockeyPlayers:[], viewPlayers:false})
}
  render(){
    return(


      <div className='container'>
      <div className='row'>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS}>Search Players</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS2}>Search Teams</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS4}>Find Upcoming Events</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS4}>Find Broadcast Listings</Link>
      </button>
      </div>

      </div>
      <hr/>
      <form onSubmit={this.searchTeams}>

      <label htmlFor='hockeyTeam'><u>Select A Hockey Team:</u></label>
      <select className="form-control" id="hockeyTeam">
      {this.state.hockeyTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<hr/>
      <label htmlFor='footballTeam'><u>Select A Football Team:</u></label>
      <select className="form-control" id="footballTeam">
      {this.state.footballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<hr/>
      <label htmlFor='baseballTeam'><u>Select A Baseball Team:</u></label>
      <select className="form-control" id="baseballTeam">
      {this.state.baseballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<hr/>
      <label htmlFor='basketballTeam'><u>Select A Basketball Team:</u></label>
      <select className="form-control" id="basketballTeam">
      {this.state.basketballTeams.map(team=> <option id={team.id}>{team.strTeam}, {team.idTeam}</option>)}
      </select>
<hr/>
<br/>

              <button className='btn btn-block btn-info' type = 'submit'> Search </button>


      </form>

<br/><hr/>
<div className='row'>
<button onClick={this.clear} className='btn btn-block btn-dark'>Clear Results</button>
</div>
<br/><hr/>


<div className='row'>

<div className='col-6'>
{this.state.viewPlayers?<div>
  <div className='row'>
  <div className='col-12'>
  <button className='btn btn-block btn-info'onClick={this.sortByPlayer}>Sort By Player</button>
  </div>
  </div>
  <hr/>
<h1>{this.state.hockeyteam}</h1>
  {this.state.hockeyPlayers.filter(player=>
    player.strPlayer.toLowerCase().includes(this.props.filterString.toLowerCase())||
    player.strPosition.toLowerCase().includes(this.props.filterString.toLowerCase()))

    .map(player=>
  <div className='list-group-item'>
{player.strPlayer}:
{player.strPosition}


  </div>)}</div> :''}
</div>

<div className='col-6'>
{this.state.viewPlayers?<div>
  <div className='row'>
  <div className='col-12'>
  <button className='btn btn-block btn-info'onClick={this.sortByPosition}>Sort By Position</button>
  </div>
  </div>
  <hr/>
<h1>{this.state.footballteam}</h1>
  {this.state.footballPlayers.filter(player=>
    player.strPlayer.toLowerCase().includes(this.props.filterString.toLowerCase())||
    player.strPosition.toLowerCase().includes(this.props.filterString.toLowerCase()))

    .map(player=>
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
  {this.state.baseballPlayers.filter(player=>
    player.strPlayer.toLowerCase().includes(this.props.filterString.toLowerCase())||
    player.strPosition.toLowerCase().includes(this.props.filterString.toLowerCase()))

    .map(player=>
  <div className='list-group-item'>
{player.strPlayer}:
{player.strPosition}


  </div>)}</div> :''}
</div>

<div className='col-6'>
{this.state.viewPlayers?<div>
<h1>{this.state.basketballteam}</h1>
  {this.state.basketballPlayers.filter(player=>
    player.strPlayer.toLowerCase().includes(this.props.filterString.toLowerCase())||
    player.strPosition.toLowerCase().includes(this.props.filterString.toLowerCase()))

    .map(player=>
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
