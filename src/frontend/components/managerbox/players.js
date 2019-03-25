import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Players extends Component{


  render(){
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
<i className={this.props.sortedByFirstName ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Last Name
<i className={this.props.sortedByLastName ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Sport
<i className={this.props.sortedBySport ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Team
<i className={this.props.sortedByTeamName ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">
Position
<i className={this.props.sortedByPosition ? "fas fa-angle-double-down" : ''}></i>

</div>

<div className="col-2 list-group-item-dark column-heading">

</div>


</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.props.sortByFirstName} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.props.sortByLastName} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.props.sortBySport} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.props.sortByTeamName} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">
<button className='btn btn-sm btn-dark' disabled={this.props.isEditable? '' : 'disabled'} onClick={this.props.sortByPosition} > Sort</button>
</div>

<div className="col-2 list-group-item-dark column-heading">

</div>


</div>

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


</div>


)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Players);
