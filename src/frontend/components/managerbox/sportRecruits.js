import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
class SportRecruits extends Component{

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

</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SportRecruits);
