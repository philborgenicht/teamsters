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





  render(){
    let useremail
    return(

<div className="container">

<div className="row">
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
      <p>Account: {useremail=authUser.email}</p>
      <button className='btn btn-block btn-dark'id={authUser.email} onClick={this.props.viewMySports}> View My Sports </button>
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
    <Link to={ROUTES.PLAYER_RECRUITS}> <button className='btn btn-info'>All Players </button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.TEAM_RECRUITS}> <button className='btn btn-info'>All Teams</button> </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.SPORT_RECRUITS}> <button className='btn btn-info'>All Sports </button></Link>
</div>



</div>
<hr/>
<div className='row justify-content-center'>
<h1> Sports </h1>
</div>



<div className="row justify-content-center">

<div className="col-6 list-group-item-dark column-heading">
Sport
</div>



<div className="col-6 list-group-item-dark column-heading">
</div>

</div>




{this.props.currentUserSports.filter(sport=>
  sport.name.toLowerCase().includes(this.props.filterString.toLowerCase())).
  map(sport=>
<div className='row justify-content-center'>



<div className='col-6 list-group-item column-info'>
{sport.name}
</div>


<div className='col-6 list-group-item column-info'>
<button className='btn btn-block btn-dark'disabled={this.props.isEditable? '' : 'disabled'} id={sport.id} onClick={this.props.deleteSport}> Release </button>
</div>



</div>)}


{this.state.sportsToDelete.map(elem=>
<div >
<div >
<form>

<div className="col-6 list-group-item column-info">
{elem}
</div>
<div className='col-6 list-group-item column-info'>
<button className='btn btn-block btn-dark' type="submit"> Confirm </button>
</div>
</form>
</div>
</div>)}

</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Activities);
