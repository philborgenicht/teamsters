import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
import {Link} from 'react-router-dom'

class TeamRecruits extends Component{


state={
  athletes:[],
  customers:[],
  customers_athletes:[],
  teams:[],
  customers_teams:[],
  user:[],

  sortedByTeamTitle:false,
  sortedByCityTitle:false,
  sortedByStateTitle:false,
  sortedBySportTitle:false,
  isEditable:false,
  teamsToAdd:[],
  userEmail:''

}

componentDidMount = async() => {
  const response = await fetch('https://galvanize-borgenicht.herokuapp.com/teams')
  const teams = await response.json()

  const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams')
  const customers_teams= response2.json()

  const response3 = await fetch('https://galvanize-borgenicht.herokuapp.com/athletes')
  const athletes= response3.json()

  const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
  const customers = await response4.json()

  const response5 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes')
  const customers_athletes= response5.json()


  this.setState({athletes:athletes, customers:customers, customers_athletes:customers_athletes, teams:teams, customers_teams:customers_teams})
}

sortByTeamTitle=()=>{
  let currentTeams=this.state.teams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.name)<(team2.name)){
      return -1
    }
    else if((team1.name)>(team2.name)){
      return 1
    }
  })
  this.setState({teams:newState, sortedByTeamTitle:true, sortedBySportTitle:false, sortedByCityTitle:false, sortedByStateTitle:false})
}


sortByCityTitle=()=>{
  let currentTeams=this.state.teams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.city)<(team2.city)){
      return -1
    }
    else if((team1.city)>(team2.city)){
      return 1
    }
  })
this.setState({teams:newState, sortedByTeamTitle:false, sortedBySportTitle:false, sortedByCityTitle:true, sortedByStateTitle:false})}

sortByStateTitle=()=>{
  let currentTeams=this.state.teams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.state)<(team2.state)){
      return -1
    }
    else if((team1.state)>(team2.state)){
      return 1
    }
  })
this.setState({teams:newState, sortedByTeamTitle:false, sortedBySportTitle:false, sortedByCityTitle:false, sortedByStateTitle:true})}

sortBySportTitle=()=>{
  let currentTeams=this.state.teams
  let newState=currentTeams.sort((team1, team2)=>{
    if((team1.sportName)<(team2.sportName)){
      return -1
    }
    else if((team1.sportName)>(team2.sportName)){
      return 1
    }
  })
this.setState({teams:newState, sortedByTeamTitle:false, sortedBySportTitle:true, sortedByCityTitle:false, sortedByStateTitle:false})}



purchase=async (e)=>{
  let teamId=e.target.id
  let desiredTeam=this.props.teams.filter(team=>team.id==teamId)[0]
  let customer=this.state.customers.filter(customer=>customer.email===this.state.userEmail)[0]
  let desiredTeamId=desiredTeam.id
  let customerId=customer.id

  let currentState=this.state.teamsToAdd
  currentState.push(desiredTeam.name)
  this.setState({teamsToAdd:currentState})

  ///posting new team to an individual user's dashboard
  await fetch(`https://galvanize-borgenicht.herokuapp.com/customers_teams/`,{
    method: 'POST',
    body: JSON.stringify({
      customerId:customerId,
      teamId:desiredTeamId

    }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
}

setUserEmail=(e)=>{
  this.setState({userEmail:e.target.id})
  console.log(this.state.userEmail)
  this.setState({isEditable:true})
}
  render(){
    let useremail
    return(

<div className="container">




<div className='row'>
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
      <p>Account: {useremail=authUser.email}</p>
      <button onClick={this.setUserEmail} id={authUser.email}> click to make changes </button>
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
<h1> All Teams </h1>
</div>



<div className="row justify-content-center">


<div className="col-2 list-group-item-dark">
<div>Team Name</div>
<i className={this.state.sortedByTeamTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
<div>Team City</div>
<i className={this.state.sortedByCityTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
<div>Team State</div>
<i className={this.state.sortedByStateTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
<div>Sport Affiliation</div>
<i className={this.state.sortedBySportTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>



<div className="col-2 list-group-item-dark">

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






{this.props.teams.filter(team=>
  team.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.city.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.state.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.sportName.toLowerCase().includes(this.props.filterString.toLowerCase()))
  .map(team=>
<div className="row justify-content-center">


<div className="col-2 list-group-item">
<div>{team.name}</div>
</div>

<div className="col-2 list-group-item">
<div>{team.city}</div>
</div>

<div className="col-2 list-group-item">
<div>{team.state}</div>
</div>

<div className="col-2 list-group-item">
<div>{team.sportName}</div>
</div>



<div className="col-2 list-group-item">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-outline-success" onClick={this.purchase} id={team.id}> purchase</button>
</div>





</div>)}



{this.state.teamsToAdd.map(elem=>
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

export default withAuthorization(authCondition)(TeamRecruits);
