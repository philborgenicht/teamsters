import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
import {Link} from 'react-router-dom'
class TeamRecruits extends Component{

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
<i className={this.props.sortedByTeamTitle ? "fas fa-angle-double-down" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Team City</div>
<i className={this.props.sortedByCityTitle ? "fas fa-angle-double-down" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Team State</div>
<i className={this.props.sortedByStateTitle ? "fas fa-angle-double-down" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-heading">
<div>Sport Affiliation</div>
<i className={this.props.sortedBySportTitle ? "fas fa-angle-double-down" : ''}></i>
</div>



<div className="col-2 list-group-item-dark column-heading">

</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortByTeamTitle}>Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortByCityTitle}>Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortByStateTitle}>Sort </button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button disabled={this.props.isEditable? '' : 'disabled'} className='btn btn-sm btn-dark' onClick={this.props.sortBySportTitle}>Sort </button>
</div>


<div className='col-2 list-group-item-dark column-heading'>
</div>
</div>






{this.props.teams.filter(team=>
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

</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TeamRecruits);
