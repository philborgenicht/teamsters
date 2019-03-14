import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class MyTeams extends Component{



  render(){
    let useremail
    return(

<div className="container">
<div className='row'>
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>
</div>


  <div className="row justify-content-center">

  <div className='col-2'>
    <Link to={ROUTES.ROSTER}>My Athletes</Link>
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
  <h1 className="heading"> My Teams </h1>
  </div>




  <div className="row justify-content-center">

  <div className="col-2 list-group-item team-heading column-heading">
  NAME
  </div>

  <div className="col-2 list-group-item team-heading column-heading">
  CITY
  </div>

  <div className="col-2 list-group-item team-heading column-heading">
  STATE
  </div>

  <div className="col-2 list-group-item team-heading column-heading">
  SPORT
  </div>

  <div className="col-2 list-group-item team-heading column-heading">

  </div>

  </div>


  {this.props.teams.filter(team=>team.onList===true).filter(team=>
                                                              team.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                              team.city.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                              team.sportName.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                              team.state.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                            ).map(team=>
    <div className="row justify-content-center">

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
    <div><button className="btn btn-outline-success" onClick={this.props.removeTeam} id={team.id}>remove from list</button></div>
    </div>






    </div>
  )}










</div>
)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(MyTeams);
