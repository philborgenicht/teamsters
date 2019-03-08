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
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>
  <Link to={ROUTES.PRACTICE}>Practice</Link>
  <Link to={ROUTES.ROSTER}>Roster</Link>


  <Link to={ROUTES.MYSPORTS}>My Sports</Link>

  <Link to={ROUTES.TEAMS}>Teams</Link>
  <Link to={ROUTES.ATHLETES}>Athletes</Link>
  <Link to={ROUTES.SPORTS}>Sports</Link>
  <div className="row justify-content-center">
  <h1 className="heading"> TEAMS </h1>
  </div>
  <div className="row justify-content-center">

  <div className="col-2 list-group-item team-heading">
  NAME
  </div>

  <div className="col-2 list-group-item team-heading">
  CITY
  </div>

  <div className="col-2 list-group-item team-heading">
  STATE
  </div>

  <div className="col-2 list-group-item team-heading">
  SPORT
  </div>

  <div className="col-2 list-group-item team-heading">
  <button className="btn btn-outline-success"> remove </button>
  </div>

  </div>


  {this.props.teams.filter(team=>team.onList===true).filter(team=>
                                                              team.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                              team.city.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                              team.sportName.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                              team.state.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                            ).map(team=>
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
