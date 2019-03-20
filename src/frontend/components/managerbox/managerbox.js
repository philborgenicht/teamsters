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
      <button className='btn btn-block btn-dark'id={authUser.email} onClick={this.setUserEmail}> click to make changes</button>
    </div>
    )}

  </AuthUserContext.Consumer>
</div>

<br/><hr/>



<div className="row justify-content-center">



<hr/>

<div className='col-2'>
<Link to={ROUTES.PLAYERS}> <button className='btn btn-info'>My Players</button> </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.CLUBS}> <button className='btn btn-info'>My Clubs</button> </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.ACTIVITIES}> <button className='btn btn-info'>My Sports</button> </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.PLAYER_RECRUITS}> <button className='btn btn-info'>All Players</button> </Link>
</div>


<div className='col-2'>
<Link to={ROUTES.TEAM_RECRUITS}> <button className='btn btn-info'>All Teams </button></Link>
</div>

<div className='col-2'>
<Link to={ROUTES.SPORT_RECRUITS}> <button className='btn btn-info'>All Sports </button></Link>
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
