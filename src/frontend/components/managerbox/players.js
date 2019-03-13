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
      <button id={authUser.email} onClick={this.setUserEmail}>VIEW YOUR PLAYERS </button>
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
<h1> players </h1>
</div>

<div className="row justify-content-center">

<div className="col-2">
First Name
<i className={this.state.sortedByFirstName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2">
Last Name
<i className={this.state.sortedByLastName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2">
Sport
<i className={this.state.sortedBySportName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2">
Team
<i className={this.state.sortedByTeamName ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2">
Position
<i className={this.state.sortedByPosition ? "fa fa-spinner fa-pulse" : ''}></i>

</div>

<div className="col-2">
<button className="btn btn-outline-success">ditch 'em'</button>
</div>


</div>

<div className="row justify-content-center">

<div className="col-2">
<button disabled={this.state.isEditable? '' : 'disabled'} onClick={this.sortByFirstName} > sort</button>
</div>

<div className="col-2">
<button disabled={this.state.isEditable? '' : 'disabled'} onClick={this.sortByLastName} > sort</button>
</div>

<div className="col-2">
<button disabled={this.state.isEditable? '' : 'disabled'} onClick={this.sortBySportName} > sort</button>
</div>

<div className="col-2">
<button disabled={this.state.isEditable? '' : 'disabled'} onClick={this.sortByTeamName} > sort</button>
</div>

<div className="col-2">
<button disabled={this.state.isEditable? '' : 'disabled'} onClick={this.sortByPosition} > sort</button>
</div>

<div className="col-2">

</div>


</div>


<div className="row justify-content-center">




</div>
{this.state.currentUserAthletes.filter(athlete=>
  athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase())).



  map(athlete=>
<div className="row justify-content-center">

<div className='col-2 list-group-item'>
{athlete.name.split(' ')[0]}
</div>

<div className='col-2 list-group-item'>
{athlete.name.split(' ')[1]}
</div>

<div className='col-2 list-group-item'>
{athlete.sport}
</div>

<div className='col-2 list-group-item'>
{athlete.teamName}
</div>

<div className='col-2 list-group-item'>
{athlete.position}
</div>

<div className='col-2'>
<button disabled={this.state.isEditable? '' : 'disabled'} id={athlete.id} onClick={this.releaseAthlete}> ditch </button>
</div>







</div>)}

{this.state.playersToDelete.map(elem=>
<div>
<form>
<div className="col-6">
{elem}
</div>
<div className='col-6'>
<button type="submit"> confirm </button>
</div>
</form>
</div>)}




</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Players);
