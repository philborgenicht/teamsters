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
      <button className='btn btn-block btn-dark' id={authUser.email} onClick={this.props.viewMyTeams}> View My Teams </button>
    </div>
    )}
  </AuthUserContext.Consumer>
</div>


<br/><hr/>

<div className="row justify-content-center">

<div className='col-2'>
    <Link to={ROUTES.MANAGERBOX}> <button className='btn btn-info'>Manager Box</button> </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYERS}> <button className='btn btn-info'>My Players</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.ACTIVITIES}><button className='btn btn-info'> My Sports</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYER_RECRUITS}> <button className='btn btn-info'>All Players </button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.TEAM_RECRUITS}> <button className='btn btn-info'>All Teams </button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.SPORT_RECRUITS}> <button className='btn btn-info'>All Sports </button></Link>
</div>


</div>
<hr/>
<div className='row justify-content-center'>
<h1> Clubs </h1>
</div>



<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-heading">
Team
<i className={this.state.sortedByTeamTitle ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
City
<i className={this.state.sortedByCityTitle ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
State
<i className={this.state.sortedByStateTitle ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Sport
<i className={this.state.sortedBySportTitle ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortByTeamTitle}>sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortByCityTitle}>sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortByStateTitle}>sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortBySportTitle}>sort</button>
</div>


<div className='col-2 list-group-item-dark column-heading'>
</div>
</div>


{this.props.currentUserTeams.filter(team=>
  team.name.toLowerCase().includes(this.props.filterString.toLowerCase())||

  team.city.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.state.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.sportName.toLowerCase().includes(this.props.filterString.toLowerCase())).
  map(team=>
<div className={team.sportName==="Basketball"? "row basketballteam justify-content-center": team.sportName==="Football"? "row footballteam justify-content-center": team.sportName==="Baseball"? "row baseballteam justify-content-center": team.sportName==="Hockey"? "row hockeyteam justify-content-center" :''}>


<div className='col-2 list-group-item column-info'>
{team.name}
</div>

<div className='col-2 list-group-item column-info'>
{team.city}
</div>

<div className='col-2 list-group-item column-info'>
{team.state}
</div>

<div className='col-2 list-group-item column-info'>
{team.sportName}
</div>

<div className='col-2 list-group-item column-info'>
<button className='btn btn-block btn-dark' disabled={this.props.isEditable? '' : 'disabled'} id={team.id} onClick={this.props.deleteTeam}> Release</button>
</div>



</div>)}


{this.state.teamsToDelete.map(elem=>
<div >
<form>
<div className="col-6 list-group-item column-info">
{elem}
</div>
<div className='col-6 list-group-item column-info'>
<button className='btn btn-block btn-dark'  type="submit"> confirm </button>
</div>
</form>
</div>)}



</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Clubs);
