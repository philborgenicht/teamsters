import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Clubs extends Component{

  state={
    customers_teams:[],
    customers:[],
    teams:[],
    athletes:[],
    customers_athletes:[],
    userEmail:'',
    currentUser:[],
    user:[],
    isEditable:false,
    currentUserTeams:[],
    sortedByTeamTitle:false,
    sortedBySportTitle:false,
    sortedByCityTitle:false,
    sortedByStateTitle:false,
    teamsToDelete:[]
  }

  componentDidMount = async() => {
    const response = await fetch('https://galvanize-borgenicht.herokuapp.com/athletes')
    const athletes = await response.json()

    const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes')
    const customers_athletes= response2.json()

    const response3 = await fetch('https://galvanize-borgenicht.herokuapp.com/teams')
    const teams= response3.json()

    const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
    const customers = await response4.json()

    const response5 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams')
    const customers_teams= response5.json()


    this.setState({athletes:athletes, customers:customers, customers_athletes:customers_athletes, teams:teams, customers_teams:customers_teams})
  }

setUserEmail=(e)=>{
  let userEmail=e.target.id
  this.setState({userEmail:userEmail})
  this.setState({isEditable:true})

  let currentUser=this.state.customers.filter(customer=>customer.email===userEmail)[0]
  console.log("chicken", currentUser)
  this.setState({currentUser:currentUser})
  console.log("currentuser", currentUser)

  let currentUserTeamIds=this.props.customers_teams.filter(entry=>entry.customerId==currentUser.id).map(entry=>entry.teamId)
  console.log('currentuserteamids', currentUserTeamIds)
  let currentUserTeams=this.props.teams.filter(team=>currentUserTeamIds.includes(team.id))
  console.log('currentuserteams', currentUserTeams)
  this.setState({currentUserTeams:currentUserTeams})
}

sortByTeamTitle=()=>{
  let currentTeams=this.state.currentUserTeams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.name)<(team2.name)){
      return -1
    }
    else if((team1.name)>(team2.name)){
      return 1
    }
  })
  this.setState({currentUserTeams:newState, sortedByTeamTitle:true, sortedBySportTitle:false, sortedByCityTitle:false, sortedByStateTitle:false})
}


sortByCityTitle=()=>{
  let currentTeams=this.state.currentUserTeams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.city)<(team2.city)){
      return -1
    }
    else if((team1.city)>(team2.city)){
      return 1
    }
  })
this.setState({currentUserTeams:newState, sortedByTeamTitle:false, sortedBySportTitle:false, sortedByCityTitle:true, sortedByStateTitle:false})}

sortByStateTitle=()=>{
  let currentTeams=this.state.currentUserTeams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.state)<(team2.state)){
      return -1
    }
    else if((team1.state)>(team2.state)){
      return 1
    }
  })
this.setState({currentUserTeams:newState, sortedByTeamTitle:false, sortedBySportTitle:false, sortedByCityTitle:false, sortedByStateTitle:true})}

sortBySportTitle=()=>{
  let currentTeams=this.state.currentUserTeams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.sportName)<(team2.sportName)){
      return -1
    }
    else if((team1.sportName)>(team2.sportName)){
      return 1
    }
  })
this.setState({currentUserTeams:newState, sortedByTeamTitle:false, sortedBySportTitle:true, sortedByCityTitle:false, sortedByStateTitle:false})}


releaseTeam=async (e)=>{
  let teamId=e.target.id
  let undesiredTeam=this.props.teams.filter(team=>team.id==teamId)[0]
  let customer=this.state.customers.filter(customer=>customer.email===this.state.userEmail)[0]
  let undesiredTeamId=undesiredTeam.id
  let customerId=customer.id
  let entryToDelete=this.props.customers_teams.filter(entry=>entry.customerId==customerId && entry.teamId===undesiredTeamId)[0]
  let idToDelete=entryToDelete.id
  console.log(entryToDelete)
  console.log(idToDelete, "idtodelete")

  let currentState=this.state.teamsToDelete
  currentState.push(undesiredTeam.name)
  this.setState({teamsToDelete:currentState})

  //delete a team from a user's individual dashboard
  await fetch(`https://galvanize-borgenicht.herokuapp.com/customers_teams/${idToDelete}`,{
    method: 'DELETE',

  })

  let currentUser=this.state.customers.filter(customer=>customer.id===customerId)[0]
  console.log("chicken", currentUser)
  this.setState({currentUser:currentUser})
  console.log("currentuser", currentUser)

  let currentUserTeamIds=this.props.customers_teams.filter(entry=>entry.customerId==currentUser.id).map(entry=>entry.teamId)
  console.log('currentuserteamids', currentUserTeamIds)
  let currentUserTeams=this.props.teams.filter(team=>currentUserTeamIds.includes(team.id))
  console.log('currentuserteams', currentUserTeams)
  this.setState({currentUserTeams:currentUserTeams})
}

  render(){
    let useremail
    return(

<div className="container">

<div className="row">
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
      <p>Account: {useremail=authUser.email}</p>
      <button id={authUser.email} onClick={this.setUserEmail}> VIEW YOUR TEAMS </button>
    </div>
    )}
  </AuthUserContext.Consumer>
</div>




<div className="row justify-content-center">

<div className='col-2'>
    <Link to={ROUTES.MANAGERBOX}> Manager Box </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYER_RECRUITS}> All Players </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.TEAM_RECRUITS}> All Teams </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYERS}> My Players</Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.CLUBS}> My Clubs</Link>
</div>

</div>

<div className='row justify-content-center'>
<h1> clubs </h1>
</div>



<div className="row justify-content-center">

<div className="col-2 list-group-item">
Team
<i className={this.state.sortedByTeamTitle ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item">
City
<i className={this.state.sortedByCityTitle ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item">
State
<i className={this.state.sortedByStateTitle ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item">
Sport
<i className={this.state.sortedBySportTitle ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-outline-success">ditch 'em'</button>
</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-sm btn-primary" onClick={this.sortByTeamTitle}>sort by team</button>
</div>

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-sm btn-primary" onClick={this.sortByCityTitle}>sort by city</button>
</div>

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-sm btn-primary" onClick={this.sortByStateTitle}>sort by state</button>
</div>

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-sm btn-primary" onClick={this.sortBySportTitle}>sort by sport</button>
</div>


<div className='col-2 list-group-item-dark'>
</div>
</div>


{this.state.currentUserTeams.filter(team=>
  team.name.toLowerCase().includes(this.props.filterString.toLowerCase())||

  team.city.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.state.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.sportName.toLowerCase().includes(this.props.filterString.toLowerCase())).
  map(team=>
<div className='row justify-content-center'>



<div className='col-2 list-group-item'>
{team.name}
</div>

<div className='col-2 list-group-item'>
{team.city}
</div>

<div className='col-2 list-group-item'>
{team.state}
</div>

<div className='col-2 list-group-item'>
{team.sportName}
</div>

<div className='col-2 list-group-item'>
<button disabled={this.state.isEditable? '' : 'disabled'} id={team.id} onClick={this.releaseTeam}> ditch </button>
</div>



</div>)}


{this.state.teamsToDelete.map(elem=>
<div>
<form>
{elem}
<button type="submit"> confirm </button>
</form>
</div>)}



</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Clubs);
