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
  <Link to={ROUTES.ROSTER}><button className='btn btn-info'>My Athletes</button></Link>
  </div>

  <div className='col-2'>
    <Link to={ROUTES.MYTEAMS}><button className='btn btn-info'>My Teams</button></Link>
  </div>

  <div className='col-2'>
    <Link to={ROUTES.ATHLETES}><button className='btn btn-info'>Athletes</button></Link>
  </div>

  <div className='col-2'>
    <Link to={ROUTES.TEAMS}><button className='btn btn-info'>Teams</button></Link>
  </div>



  <div className='col-2'>
    <Link to={ROUTES.SPORTS}><button className='btn btn-info'>Sports</button></Link>
  </div>


  </div>
  <hr/>
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
  <button className="btn btn-dark" onClick={this.props.removeSport} id={sport.id}>Remove</button>
  </div>


  </div>
))}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(MySports);
