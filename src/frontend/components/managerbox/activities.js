import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Activities extends Component{

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
    currentUserSports:[],
    sportsToDelete:[]
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

    const response6 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports')
    const customers_sports= response6.json()

    const response7 = await fetch('https://galvanize-borgenicht.herokuapp.com/sports')
    const sports= response7.json()


    this.setState({athletes:athletes, customers:customers, customers_athletes:customers_athletes, teams:teams, customers_teams:customers_teams, sports:sports, customers_sports:customers_sports})
  }

setUserEmail=(e)=>{
  let userEmail=e.target.id
  this.setState({userEmail:userEmail})
  this.setState({isEditable:true})

  let currentUser=this.state.customers.filter(customer=>customer.email===userEmail)[0]

  this.setState({currentUser:currentUser})

  let currentUserSportIds=this.props.customers_sports.filter(entry=>entry.customerId==currentUser.id).map(entry=>entry.sportId)
  let currentUserSports=this.props.sports.filter(sport=>currentUserSportIds.includes(sport.id))
  this.setState({currentUserSports:currentUserSports})
}

deleteSport=async (e)=>{
  let sportId=e.target.id
  let undesiredSport=this.props.sports.filter(sport=>sport.id==sportId)[0]
  let customer=this.state.customers.filter(customer=>customer.email===this.state.userEmail)[0]
  let undesiredSportId=undesiredSport.id
  let customerId=customer.id
  let entryToDelete=this.props.customers_sports.filter(entry=>entry.customerId==customerId && entry.sportId===undesiredSportId)[0]
  let idToDelete=entryToDelete.id
  console.log(entryToDelete)
  console.log(idToDelete, "idtodelete")

  let currentState=this.state.sportsToDelete
  currentState.push(undesiredSport.name)
  this.setState({sportsToDelete:currentState})

  //delete a team from a user's individual dashboard
  await fetch(`https://galvanize-borgenicht.herokuapp.com/customers_sports/${idToDelete}`,{
    method: 'DELETE',

  })

  let currentUser=this.state.customers.filter(customer=>customer.id===customerId)[0]
  console.log("chicken", currentUser)
  this.setState({currentUser:currentUser})
  console.log("currentuser", currentUser)

  let currentUserSportsIds=this.props.customers_sports.filter(entry=>entry.customerId==currentUser.id).map(entry=>entry.sportId)
  let currentUserSports=this.props.sports.filter(sport=>currentUserSportsIds.includes(sport.id))
  this.setState({currentUserSports:currentUserSports})
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
      <button id={authUser.email} onClick={this.setUserEmail}> VIEW YOUR SPORTS </button>
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
    <Link to={ROUTES.CLUBS}> My Activities</Link>
</div>

</div>

<div className='row justify-content-center'>
<h1> SPORTS </h1>
</div>



<div className="row justify-content-center">

<div className="col-6 list-group-item">
SPORT
</div>



<div className="col-6 list-group-item">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-outline-success">ditch 'em'</button>
</div>

</div>




{this.state.currentUserSports.filter(sport=>
  sport.name.toLowerCase().includes(this.props.filterString.toLowerCase())).
  map(sport=>
<div className='row justify-content-center'>



<div className='col-6 list-group-item'>
{sport.name}
</div>


<div className='col-6 list-group-item'>
<button disabled={this.state.isEditable? '' : 'disabled'} id={sport.id} onClick={this.deleteSport}> ditch </button>
</div>



</div>)}


{this.state.sportsToDelete.map(elem=>
<div >
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

export default withAuthorization(authCondition)(Activities);
