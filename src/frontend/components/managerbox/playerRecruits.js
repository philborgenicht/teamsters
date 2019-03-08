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
  user:[],
  sortedByFirstName:false,
  sortedByLastName:false,
  sortedBySport:false,
  sortedByTeamName:false,
  sortedByPosition:false

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
componentDidMount = async() => {
  const response = await fetch('https://galvanize-borgenicht.herokuapp.com/athletes')
  const athletes = await response.json()

  const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes')
  const customers_athletes= response2.json()


  const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
  const customers = await response4.json()


  this.setState({athletes:athletes, customers:customers, customers_athletes:customers_athletes})
}
recruit=(e)=>{
  console.log(e.target.id)
}
  render(){
    let useremail
    return(

<div className="container">


<div className="row">

<div className='col-2'>
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>
</div>
<div className='col-2'>
</div>
<div className='col-4'>
<Link to={ROUTES.MANAGERBOX}> MANAGER BOX </Link>
</div>
<div className='col-4'>
<Link to={ROUTES.TEAM_RECRUITS}> Teams </Link>
</div>

</div>

<div className="row">


<div className="col-2 list-group-item-dark">
<div>First Name</div>
<i className={this.state.sortedByFirstName ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
<div>Last Name</div>
<i className={this.state.sortedByLastName ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
<div>Sport</div>
<i className={this.state.sortedBySport ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
<div>Team</div>
<i className={this.state.sortedByTeamName ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
<div>Position</div>
<i className={this.state.sortedByPosition ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">

</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={this.sortByFirstName}>sort by first name</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={this.sortByLastName}>sort by last name</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={this.sortBySport}>sort by sport</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={this.sortByTeamName}>sort by team</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={this.sortByPosition}>sort by position</button>
</div>
<div className='col-2 list-group-item-dark'>
</div>
</div>






{this.state.athletes.filter(athlete=>
  athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
  athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase()))
  .map(athlete=>
<div className="row">


<div className="col-2 list-group-item">
<div>{athlete.name.split(' ')[0]}</div>
</div>

<div className="col-2 list-group-item">
<div>{athlete.name.split(' ')[1]}</div>
</div>

<div className="col-2 list-group-item">
<div>{athlete.sport}</div>
</div>

<div className="col-2 list-group-item">
<div>{athlete.teamName}</div>
</div>

<div className="col-2 list-group-item">
<div>{athlete.position}</div>
</div>

<div className="col-2 list-group-item">
<button className="btn btn-outline-success" onClick={this.recruit} id={athlete.id}> recruit</button>
</div>





</div>)}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(PlayerRecruits);
