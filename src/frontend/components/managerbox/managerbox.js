import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
import {Link} from 'react-router-dom'
class ManagerBox extends Component{



  render(){
    let useremail
    return(

<div className="container">


<div className="row">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}
  </AuthUserContext.Consumer>
</div>





<div className="row justify-content-center">

<div className='col-2'>
</div>
<div className='col-2'>
<Link to={ROUTES.ACTIVITIES}> Activities </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.PLAYERS}> Players </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.CLUBS}> Clubs </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.PLAYER_RECRUITS}> Athletes </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.TEAM_RECRUITS}> TEAMS </Link>
</div>


</div>

<div className="row justify-content-center">
<h1> managerbox </h1>
</div>

</div>



)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ManagerBox);
