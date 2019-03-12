import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
import {Link} from 'react-router-dom'
class Practice extends Component{

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
<h1> Practice Box </h1>
</div>

  </div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Practice);
