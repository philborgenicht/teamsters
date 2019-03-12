import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';
import {Link} from 'react-router-dom'
class ManagerBox extends Component{

state={
  userEmail:'',
  isEditable:false
}
setUserEmail=(e)=>{
  this.setState({userEmail:e.target.id})
  console.log(this.state.userEmail)
  this.setState({isEditable:true})
}

  render(e){
    let useremail
    return(

<div className="container">


<div className="row">
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
      <p>Account: {useremail=authUser.email}</p>
      <button id={authUser.email} onClick={this.setUserEmail}> click</button>
    </div>
    )}

  </AuthUserContext.Consumer>
</div>

{console.log("chicken", useremail)}



<div className="row justify-content-center">





<div className='col-2'>
<Link to={ROUTES.PLAYERS}> My Players </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.CLUBS}> My Clubs </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.PLAYER_RECRUITS}> All Players </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.TEAM_RECRUITS}> All Teams </Link>
</div>

<div className='col-2'>
<Link to={ROUTES.SPORT_RECRUITS}> All Sports </Link>
</div>


</div>

<div className="row justify-content-center">
<h1> Manager Box </h1>
</div>

</div>



)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ManagerBox);
