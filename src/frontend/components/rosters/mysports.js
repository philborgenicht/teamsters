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

  <div className="row justify-content-center">

  <div className='col-2'>
  <Link to={ROUTES.ROSTER}>My Athletes</Link>
  </div>

  <div className='col-2'>
    <Link to={ROUTES.MYTEAMS}>My Teams</Link>
  </div>

  <div className='col-2'>
    <Link to={ROUTES.ATHLETES}>Available Athletes</Link>
  </div>

  <div className='col-2'>
    <Link to={ROUTES.TEAMS}>Available Teams</Link>
  </div>



  <div className='col-2'>
    <Link to={ROUTES.SPORTS}>Sports</Link>
  </div>


  </div>
  <div className="row justify-content-center">
      <h1>My Sports</h1>
  </div>



{this.props.sports.filter(sport=>sport.onList===true).filter(sport=>
                                                              sport.name.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                            ).map(sport=>(
  <div className="row justify-content-center list-group-item column-info">


  <div>
  {sport.name}
  </div>
  <div>
  <button className="btn btn-dark" onClick={this.props.removeSport} id={sport.id}>remove sport</button>
  </div>


  </div>
))}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(MySports);
