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
      <button className='btn btn-block btn-dark' id={authUser.email} onClick={this.setUserEmail} > click to make changes </button>
      </div>
      )}

  </AuthUserContext.Consumer>
</div>

<div className="row justify-content-center">

<div className='col-2'>
    <Link to={ROUTES.MANAGERBOX}> Manager Box </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYERS}> My Players</Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.CLUBS}> My Clubs</Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.ACTIVITIES}> My Sports </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.PLAYER_RECRUITS}> All Players </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.TEAM_RECRUITS}> All Teams </Link>
</div>



</div>

<div className='row justify-content-center'>
<h1> activities</h1>
</div>


{this.props.sports.filter(sport=>
  sport.name.toLowerCase().includes(this.props.filterString.toLowerCase()))
  .map(sport=>
<div className="row justify-content-center">


<div className="col-6 list-group-item column-info">
<div>{sport.name}</div>
</div>




<div className="col-6 list-group-item column-info">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-outline-success" onClick={this.chooseSport} id={sport.id}> choose Sport</button>
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
<button className='btn btn-block btn-dark'type="submit"> confirm </button>
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
