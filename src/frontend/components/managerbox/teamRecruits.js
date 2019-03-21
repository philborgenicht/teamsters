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
    if(team1.name<team2.name){
      return -1
    }
    if(team1.name>team2.name){
      return 1
    }
    if(team1.name===team2.name){
      return 0
    }
  })
  this.setState({teams:newState, sortedByTeamTitle:true, sortedBySportTitle:false, sortedByCityTitle:false, sortedByStateTitle:false})
}


sortByCityTitle=()=>{
  let currentTeams=this.state.teams
  let newState=currentTeams.sort((team1, team2)=>{
    if(team1.city<team2.city){
      return -1
    }
    if(team1.city>team2.city){
      return 1
    }
    if(team1.city===team2.city){
      return 0
    }
  })
this.setState({teams:newState, sortedByTeamTitle:false, sortedBySportTitle:false, sortedByCityTitle:true, sortedByStateTitle:false})}

sortByStateTitle=()=>{
  let currentTeams=this.state.teams
  let newState=currentTeams.sort((team1, team2)=>{
    if(team1.state<team2.state){
      return -1
    }
    if(team1.state>team2.state){
      return 1
    }
    if(team1.state===team2.state){
      return 0
    }
  })
this.setState({teams:newState, sortedByTeamTitle:false, sortedBySportTitle:false, sortedByCityTitle:false, sortedByStateTitle:true})}

sortBySportTitle=()=>{
  let currentTeams=this.state.teams
  let newState=currentTeams.sort((team1, team2)=>{
    if(team1.sportName<team2.sportName){
      return -1
    }
    if(team1.sportName>team2.sportName){
      return 1
    }
    if(team1.sportName===team2.sportName){
      return 0
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
      <button className='btn btn-block btn-dark' onClick={this.props.setUserEmail} id={authUser.email}> Click To Make Changes</button>
      </div>
        )}

  </AuthUserContext.Consumer>
</div>
<br/><hr/>
<div className="row justify-content-center">

<div className='col-2'>
    <Link to={ROUTES.MANAGERBOX}><button className='btn btn-info'> Manager Box </button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYERS}> <button className='btn btn-info'>My Players</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.CLUBS}> <button className='btn btn-info'>My Clubs</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.ACTIVITIES}> <button className='btn btn-info'>My Sports</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYER_RECRUITS}> <button className='btn btn-info'>All Players</button> </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.SPORT_RECRUITS}> <button className='btn btn-info'>All Sports</button> </Link>
</div>



</div>
<hr/>
<div className='row justify-content-center'>
<h1> All Teams </h1>
</div>



<div className="row justify-content-center">


<div className="col-2 list-group-item-dark column-heading">
<div>Team Name</div>
<i className={this.state.sortedByTeamTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Team City</div>
<i className={this.state.sortedByCityTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Team State</div>
<i className={this.state.sortedByStateTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Sport Affiliation</div>
<i className={this.state.sortedBySportTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>



<div className="col-2 list-group-item-dark column-heading">

</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortByTeamTitle}>Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortByCityTitle}>Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortByStateTitle}>Sort </button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortBySportTitle}>Sort </button>
</div>


<div className='col-2 list-group-item-dark column-heading'>
</div>
</div>






{this.state.teams.filter(team=>
  team.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.city.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.state.toLowerCase().includes(this.props.filterString.toLowerCase())||
  team.sportName.toLowerCase().includes(this.props.filterString.toLowerCase()))
  .map(team=>
<div  className={team.sportName==="Basketball"? "row basketballteam justify-content-center": team.sportName==="Football"? "row footballteam justify-content-center": team.sportName==="Baseball"? "row baseballteam justify-content-center": team.sportName==="Hockey"? "row hockeyteam justify-content-center" :''}>

<div className="col-2 list-group-item column-info">
<div>{team.name}</div>
</div>

<div className="col-2 list-group-item column-info">
<div>{team.city}</div>
</div>

<div className="col-2 list-group-item column-info">
<div>{team.state}</div>
</div>

<div className="col-2 list-group-item column-info">
<div>{team.sportName}</div>
</div>



<div className="col-2 list-group-item column-info">
<button disabled={this.props.isEditable? '' : 'disabled'}className="btn btn-info" onClick={this.props.recruitTeam} id={team.id}> Purchase</button>
</div>





</div>)}


<br/>
{this.state.teamsToAdd.map(elem=>
<div className=''>
<div className=''>
<form>
<div className="col-6 list-group-item">
{elem}
</div>
<div className='col-6 list-group-item'>
<button className='btn btn-block btn-dark' type="submit"> confirm </button>
</div>
</form>
</div>
</div>)}


</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TeamRecruits);
