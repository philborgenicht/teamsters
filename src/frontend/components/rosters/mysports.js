import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class MySports extends Component{



  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>

  <Link to={ROUTES.PRACTICE}>Practice</Link>
  <Link to={ROUTES.ROSTER}>Roster</Link>

  <Link to={ROUTES.MYTEAMS}>My Teams</Link>


  <Link to={ROUTES.TEAMS}>Teams</Link>
  <Link to={ROUTES.ATHLETES}>Athletes</Link>
  <Link to={ROUTES.SPORTS}>Sports</Link>

<h1> my sports </h1>
<div className="row">
    <div className="col-12 list-group-item">Sports</div>
</div>

{this.props.sports.filter(sport=>sport.onList===true).filter(sport=>
                                                              sport.name.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                            ).map(sport=>(
  <div>
  {sport.name}
  <button className="btn btn-outline-success" onClick={this.props.removeSport} id={sport.id}>remove team</button>
  </div>
))}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(MySports);
