import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Roster extends Component{



  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>


<div className="row justify-content-center">

<div className='col-2'>
  <Link to={ROUTES.MYTEAMS}>My Teams</Link>
</div>

<div className='col-2'>
  <Link to={ROUTES.MYSPORTS}>My Sports</Link>
</div>

<div className='col-2'>
  <Link to={ROUTES.TEAMS}>Available Teams</Link>
</div>

<div className='col-2'>
  <Link to={ROUTES.ATHLETES}>Available Athletes</Link>
</div>

<div className='col-2'>
  <Link to={ROUTES.SPORTS}>Sports</Link>
</div>


</div>

<div className="row justify-content-center">
<h1>My Athletes</h1>
</div>

<div className="row justify-content-center">
  <div className="col-2 list-group-item column-heading">
  first name
  </div>

  <div className="col-2 list-group-item column-heading">
  last name
  </div>

  <div className="col-2 list-group-item column-heading">
  team
  </div>

  <div className="col-2 list-group-item column-heading">
  sport
  </div>

  <div className="col-2 list-group-item column-heading">
  position
  </div>

  <div className="col-2 list-group-item column-info">
  </div>








</div>
{this.props.athletes.filter(athlete=>athlete.onTeam===true).filter(athlete=>

                                                            athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                            ).map(player=>
  <div className="row justify-content-center">

  <div className="col-2 list-group-item column-info">
  <div>{player.name.split(' ')[0]}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{player.name.split(' ')[1]}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{player.teamName}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{player.sport}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{player.position}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div><button className="btn btn-outline-success" onClick={this.props.trade} id={player.id}>remove from team</button></div>
  </div>






  </div>
)}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Roster);
