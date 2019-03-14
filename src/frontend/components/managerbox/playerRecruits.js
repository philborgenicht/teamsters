import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
import {Link} from 'react-router-dom'
class PlayerRecruits extends Component{


state={
  athletes:[],
  customers:[],
  customers_athletes:[],
  customers_teams:[],
  teams:[],
  user:[],
  sortedByFirstName:false,
  sortedByLastName:false,
  sortedBySport:false,
  sortedByTeamName:false,
  sortedByPosition:false,
  userEmail:'',
  isEditable:false,
  playersToAdd:[]
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
sortByFirstName=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.name.split(' ')[0])<(ath2.name.split(' ')[0])){
      return -1
    }
    else if((ath1.name.split(' ')[0])>(ath2.name.split(' ')[0])){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:true, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:false, sortedBySport:false})
}


sortByPosition=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.position)<(ath2.position)){
      return -1
    }
    else if((ath1.position)>(ath2.position)){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:true, sortedBySport:false})
}

sortByLastName=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.name.split(' ')[1])<(ath2.name.split(' ')[1])){
      return -1
    }
    else if((ath1.name.split(' ')[1])>(ath2.name.split(' ')[1])){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:true, sortedByTeamName:false, sortedByPosition:false, sortedBySport:false})
}

sortByTeamName=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.teamName)<(ath2.teamName)){
      return -1
    }
    else if((ath1.teamName)>(ath2.teamName)){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:true, sortedByPosition:false, sortedBySport:false})
}

sortBySport=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.sport)<(ath2.sport)){
      return -1
    }
    else if((ath1.sport)>(ath2.sport)){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:false, sortedBySport:true})
}

recruit=async (e)=>{
  let playerId=e.target.id
  let desiredAthlete=this.props.athletes.filter(athlete=>athlete.id==playerId)[0]
  let athleteId=desiredAthlete.id
  console.log("desiredathlete", desiredAthlete)
  let customer=this.state.customers.filter(user=>user.email===this.state.userEmail)[0]
  console.log(customer)
  let customerId=customer.id
  console.log(customer.id)

  let currentState=this.state.playersToAdd
  currentState.push(desiredAthlete.name)
  this.setState({playersToAdd:currentState})

  ///posting new athlete to an individual user's dashboard
  await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes/',{
    method: 'POST',
    body: JSON.stringify({
      customerId:customerId,
      athleteId:athleteId

    }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

}
setUserEmail=(e)=>{
  this.setState({userEmail:e.target.id})
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
      <button className='btn btn-block btn-dark' onClick={this.setUserEmail} id={authUser.email}> click to make changes </button>
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
    <Link to={ROUTES.ACTIVITIES}> My Sports</Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.SPORT_RECRUITS}> All Sports </Link>
</div>

<div className='col-2'>
    <Link to={ROUTES.TEAM_RECRUITS}> All Teams </Link>
</div>



</div>

<div className='row'>
<h1> All Players </h1>
</div>


<div className="row">


<div className="col-2 list-group-item-dark column-heading">
<div>First Name</div>
<i className={this.state.sortedByFirstName ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Last Name</div>
<i className={this.state.sortedByLastName ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Sport</div>
<i className={this.state.sortedBySport ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Team</div>
<i className={this.state.sortedByTeamName ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Position</div>
<i className={this.state.sortedByPosition ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">

</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortByFirstName}>sort </button>
</div>

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortByLastName}>sort </button>
</div>

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortBySport}>sort</button>
</div>

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortByTeamName}>sort </button>
</div>

<div className="col-2 list-group-item-dark">
<button disabled={this.state.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.sortByPosition}>sort</button>
</div>
<div className='col-2 list-group-item-dark'>
</div>
</div>






{this.props.athletes.filter(athlete=>
  athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase()))
  .map(athlete=>
<div className="row">


<div className="col-2 list-group-item column-info">
<div>{athlete.name.split(' ')[0]}</div>
</div>

<div className="col-2 list-group-item column-info">
<div>{athlete.name.split(' ')[1]}</div>
</div>

<div className="col-2 list-group-item column-info">
<div>{athlete.sport}</div>
</div>

<div className="col-2 list-group-item column-info">
<div>{athlete.teamName}</div>
</div>

<div className="col-2 list-group-item column-info">
<div>{athlete.position}</div>
</div>

<div className="col-2 list-group-item column-info">
<button disabled={this.state.isEditable? '' : 'disabled'} className="btn btn-outline-success" onClick={this.recruit} id={athlete.id}> recruit</button>
</div>





</div>)}
<br/>
{this.state.playersToAdd.map(elem=>
<div className=''>
<div className=''>
<form>
<div className="col-6 list-group-item column-info">
{elem}
</div>
<div className='col-6 list-group-item column-info'>
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

export default withAuthorization(authCondition)(PlayerRecruits);
