import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
import {Link} from 'react-router-dom'
class PlayerRecruits extends Component{

  state={
    teams:[],
    customers:[],
    customers_teams:[],
    user:[],
    sortedByTeamTitle:false,
    sortedByCityTitle:false,
    sortedByStateTitle:false,
    sortedBySportTitle:false
  }

  componentDidMount = async() => {


    const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/teams')
    const teams = await response2.json()

    const response = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams')
    const customers_teams= response.json()


    const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
    const customers = await response4.json()


    this.setState({teams:teams, customers:customers, customers_teams:customers_teams})
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
    this.setState({teams:newState,  sortedByTeamTitle:true, sortedByCityTitle:false, sortedByStateTitle:false, sortedBySportTitle:false})
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
    this.setState({teams:newState, sortedByTeamTitle:false, sortedByCityTitle:true, sortedByStateTitle:false, sortedBySportTitle:false})
  }

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
    this.setState({teams:newState, sortedByTeamTitle:false, sortedByCityTitle:false, sortedByStateTitle:true, sortedBySportTitle:false})
  }

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
    this.setState({teams:newState, sortedByTeamTitle:false, sortedByCityTitle:false, sortedByStateTitle:false, sortedBySportTitle:true})
  }


purchase=(e)=>{
  console.log(e.target.id)
}
  render(){
    let useremail
    return(

<div className="container">


<div className="row justify-content-center">

<div className='col-1'>
</div>

<div className='col-2'>
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}
{console.log(useremail)}
  </AuthUserContext.Consumer>
</div>

<div className='col-2'>
</div>

<div className='col-3'>
<Link to={ROUTES.MANAGERBOX}> Manager Box </Link>
</div>

<div className='col-1'>
</div>
<div className='col-3'>
<Link to={ROUTES.PLAYER_RECRUITS}> Athletes </Link>
</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark">
<div>Team</div>
<i className={this.state.sortedByTeamTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>


<div className="col-2 list-group-item-dark">
<div>City</div>
<i className={this.state.sortedByCityTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>


<div className="col-2 list-group-item-dark">
<div>State</div>
<i className={this.state.sortedByStateTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>



<div className="col-2 list-group-item-dark">
<div>Sport</div>
<i className={this.state.sortedBySportTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>


<div className="col-2 list-group-item-dark">
<div></div>
</div>


</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary"onClick={this.sortByTeamTitle}>sorty by team</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary"onClick={this.sortByCityTitle}>sorty by city</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary"onClick={this.sortByStateTitle}>sorty by state</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary"onClick={this.sortBySportTitle}>sort by sport</button>
</div>

<div className="col-2 list-group-item-dark">
</div>

</div>



{this.state.teams.filter(team=>
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
<div><button className="btn btn-outline-success" onClick={this.purchase} id={team.id}> purchase </button></div>
</div>


</div>)}


</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(PlayerRecruits);
