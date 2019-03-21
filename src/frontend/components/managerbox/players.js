import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Players extends Component{
state={
  rosters:[],
  customers:[],
  athletes:[],
  currentUser:[],
  userEmail:'',
  teams:[],
  customers_athletes:[],
  customers_teams:[],
  currentUserAthletes:[],
  isEditable:false,
  playersToDelete:[]
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


  this.setState({athletes:athletes, customers:customers, customers_athletes:customers_athletes})
}

setUserEmail=(e)=>{
  let userEmail=e.target.id
  this.setState({userEmail:userEmail})

  let currentUser=this.state.customers.filter(customer=>customer.email===userEmail)[0]
  this.setState({currentUser:currentUser})

  let currentUserAthleteIds=this.props.customers_athletes.filter(entry=>entry.customerId==currentUser.id).map(entry=>entry.athleteId)
  console.log('chicken', currentUserAthleteIds)

  let currentUserAthletes=this.state.athletes.filter(athlete=>currentUserAthleteIds.includes(athlete.id))
  console.log("currentuserathletes", currentUserAthletes)

  this.setState({currentUserAthletes:currentUserAthletes})
  this.setState({isEditable:true})
}

releaseAthlete=(e)=>{
  console.log(e.target.id)
}

sortByFirstName=()=>{
  let currentAthletes=this.state.currentUserAthletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.name.split(' ')[0])<(ath2.name.split(' ')[0])){
      return -1
    }
    else if((ath1.name.split(' ')[0])>(ath2.name.split(' ')[0])){
      return 1
    }
  })
  this.setState({currentUserAthletes:newState, sortedByFirstName:true, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:false, sortedBySport:false})
}


sortByPosition=()=>{
  let currentAthletes=this.state.currentUserAthletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.position)<(ath2.position)){
      return -1
    }
    else if((ath1.position)>(ath2.position)){
      return 1
    }
  })
  this.setState({currentUserAthletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:true, sortedBySportName:false})
}

sortByLastName=()=>{
  let currentAthletes=this.state.currentUserAthletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.name.split(' ')[1])<(ath2.name.split(' ')[1])){
      return -1
    }
    else if((ath1.name.split(' ')[1])>(ath2.name.split(' ')[1])){
      return 1
    }
  })
  this.setState({currentUserAthletes:newState, sortedByFirstName:false, sortedByLastName:true, sortedByTeamName:false, sortedByPosition:false, sortedBySportName:false})
}

sortByTeamName=()=>{
  let currentAthletes=this.state.currentUserAthletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.teamName)<(ath2.teamName)){
      return -1
    }
    else if((ath1.teamName)>(ath2.teamName)){
      return 1
    }
  })
  this.setState({currentUserAthletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:true, sortedByPosition:false, sortedBySportName:false})
}

sortBySportName=()=>{
  let currentAthletes=this.state.currentUserAthletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.sport)<(ath2.sport)){
      return -1
    }
    else if((ath1.sport)>(ath2.sport)){
      return 1
    }
  })
  this.setState({currentUserAthletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:false, sortedBySportName:true})
}


releaseAthlete=async (e)=>{
  let athleteId=e.target.id
  let undesiredAthlete=this.props.athletes.filter(athlete=>athlete.id==athleteId)[0]
  let customer=this.state.customers.filter(customer=>customer.email===this.state.userEmail)[0]
  let undesiredAthleteId=undesiredAthlete.id
  let customerId=customer.id
  let entryToDelete=this.props.customers_athletes.filter(entry=>entry.customerId==customerId && entry.athleteId===undesiredAthleteId)[0]
  let idToDelete=entryToDelete.id
  console.log(entryToDelete)
  console.log(idToDelete, "idtodelete")

  let currentState=this.state.playersToDelete
  currentState.push(undesiredAthlete.name)
  this.setState({playersToDelete:currentState})

  //delete a team from a user's individual dashboard
  await fetch(`https://galvanize-borgenicht.herokuapp.com/customers_athletes/${idToDelete}`,{
    method: 'DELETE',

  })

  let currentUser=this.state.customers.filter(customer=>customer.id===customerId)[0]
  this.setState({currentUser:currentUser})

  let currentUserAthleteIds=this.props.customers_athletes.filter(entry=>entry.customerId==currentUser.id).map(entry=>entry.athleteId)
  let currentUserAthletes=this.props.athletes.filter(athlete=>currentUserAthleteIds.includes(athlete.id))
  this.setState({currentUserAthletes:currentUserAthletes})
}
  render(){
    // let currentUser=this.state.customers.filter(customer=>customer.email===this.state.userEmail)[0]

    // let currentUserAthleteIds=this.props.customers_athletes.filter(entry=>entry.customerId===currentUserId)
    return(

<div className="container">
<div className="row">
  <AuthUserContext.Consumer>
    {authUser => (
      <div>

      <p>Account: {authUser.email}</p>
      <button className='btn btn-block btn-dark' id={authUser.email} onClick={this.props.viewMyAthletes}>VIEW YOUR PLAYERS </button>
      </div>
     )}

  </AuthUserContext.Consumer>
</div>
<hr/>
<div className="row justify-content-center">

<div className='col-2'>
    <Link to={ROUTES.MANAGERBOX}> <button className='btn btn-info'>Manager Box </button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.ACTIVITIES}><button className='btn btn-info'> My Sports</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.CLUBS}> <button className='btn btn-info'>My Clubs</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYER_RECRUITS}> <button className='btn btn-info'>All Players </button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.TEAM_RECRUITS}> <button className='btn btn-info'>All Teams</button> </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.SPORT_RECRUITS}> <button className='btn btn-info'>All Sports</button> </Link>
</div>


</div>

<div className='row justify-content-center'>
<h1> Players </h1>
</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-heading">
First Name
<i className={this.state.sortedByFirstName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Last Name
<i className={this.state.sortedByLastName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Sport
<i className={this.state.sortedBySportName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Team
<i className={this.state.sortedByTeamName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Position
<i className={this.state.sortedByPosition ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">

</div>


</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.state.isEditable? '' : 'disabled'} onClick={this.sortByFirstName} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.sortByLastName} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.sortBySportName} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.sortByTeamName} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.sortByPosition} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">

</div>


</div>

{console.log('chicken', this.props.currentUserAthletes)}
<div className="row justify-content-center">




</div>
{this.props.currentUserAthletes.filter(athlete=>
  athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase())).



  map(athlete=>
<div className={athlete.sport==="Basketball"? "row basketballplayer justify-content-center": athlete.sport==="Football"? "row footballplayer justify-content-center": athlete.sport==="Baseball"? "row baseballplayer justify-content-center": athlete.sport==="Hockey"? "row hockeyplayer justify-content-center" :''}>

<div className='col-2 list-group-item column-info'>
{athlete.name.split(' ')[0]}
</div>

<div className='col-2 list-group-item column-info'>
{athlete.name.split(' ')[1]}
</div>

<div className='col-2 list-group-item column-info'>
{athlete.sport}
</div>

<div className='col-2 list-group-item column-info'>
{athlete.teamName}
</div>

<div className='col-2 list-group-item column-info'>
{athlete.position}
</div>

<div className='col-2 list-group-item column-info'>
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} id={athlete.id} onClick={this.props.deletePlayer}> Trade </button>
</div>







</div>)}

{this.state.playersToDelete.map(elem=>
<div>
<div>
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

export default withAuthorization(authCondition)(Players);
