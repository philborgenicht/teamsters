import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class SportRecruits extends Component{

state={
  userEmail:'',
  isEditable:false,
  currentUser:[],
  customers:[],
  athletes:[],
  sports:[],
  teams:[],
  customers_teams:[],
  customers_athletes:[],
  customers_sports:[],
  sportsToAdd:[]

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

  const response6 = await fetch('https://galvanize-borgenicht.herokuapp.com/sports')
  const sports= response6.json()

  const response7 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports')
  const customers_sports= response7.json()


  this.setState({athletes:athletes, customers:customers, customers_athletes:customers_athletes, teams:teams, customers_teams:customers_teams, sports:sports, customers_sports:sports})
}
setUserEmail=(e)=>{
  this.setState({userEmail:e.target.id})
  this.setState({isEditable:true})
}
chooseSport=async (e)=>{
  let sportId=e.target.id
  let desiredSport=this.props.sports.filter(sport=>sport.id==sportId)[0]
  let desiredSportId=desiredSport.id
  let customer=this.state.customers.filter(user=>user.email===this.state.userEmail)[0]
  let customerId=customer.id
  let currentState=this.state.sportsToAdd
  currentState.push(desiredSport.name)
  this.setState({sportsToAdd:currentState})
  console.log('chicken', this.state.sportsToAdd)
  console.log(customer.id)

  ///posting new athlete to an individual user's dashboard
  await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports/',{
    method: 'POST',
    body: JSON.stringify({
      customerId:customerId,
      sportId:desiredSportId

    }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

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
      <button className='btn btn-block btn-dark' id={authUser.email} onClick={this.props.setUserEmail} > click to make changes </button>
      </div>
      )}

  </AuthUserContext.Consumer>
</div>
<hr/>
<div className="row justify-content-center">

<div className='col-2'>
    <Link to={ROUTES.MANAGERBOX}> <button className='btn btn-info'>Manager Box</button> </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYERS}> <button className='btn btn-info'>My Players</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.CLUBS}> <button className='btn btn-info'>My Clubs</button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.ACTIVITIES}> <button className='btn btn-info'>My Sports </button></Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYER_RECRUITS}> <button className='btn btn-info'>All Players</button> </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.TEAM_RECRUITS}> <button className='btn btn-info'>All Teams</button> </Link>
</div>



</div>
<hr/>
<div className='row justify-content-center'>
<h1> Activities</h1>
</div>


{this.props.sports.filter(sport=>
  sport.name.toLowerCase().includes(this.props.filterString.toLowerCase()))
  .map(sport=>
<div className="row justify-content-center">


<div className="col-6 list-group-item column-info">
<div>{sport.name}</div>
</div>




<div className="col-6 list-group-item column-info">
<button disabled={this.props.isEditable? '' : 'disabled'} className="btn btn-dark" onClick={this.props.recruitSport} id={sport.id}> Select Sport</button>
</div>





</div>)}

<br/>

{this.state.sportsToAdd.map(elem=>
<div className=''>
<div className=''>
<form>
<div className="col-6 list-group-item">
{elem}
</div>
<div className='col-6 list-group-item'>
<button className='btn btn-block btn-dark'type="submit"> Confirm </button>
</div>
</form>
</div>
</div>)}


</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SportRecruits);
