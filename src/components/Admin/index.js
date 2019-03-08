import React , {Component} from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

class AdminPage extends Component{

state={
  userEmail:'',
  showAdmin:false,
  showAddSport:false,
  showAddTeam:false,
  showAddAthlete:false
}

setEmail=(e)=>{
  console.log(e.target.id)
  let newEmail=e.target.id
  this.setState({userEmail:newEmail, showAdmin:true})
  console.log("useremail:", this.state.userEmail)
}

editTeams=()=>{
  this.state.userEmail==="philborgenicht@gmail.com"? this.setState({showAddTeam:true}): alert("sorry, only phil borgenicht can do that")
}

editSports=()=>{
    this.state.userEmail==="philborgenicht@gmail.com"? this.setState({showAddSport:true}): alert("sorry, only phil borgenicht can do that")
}

editAthletes=()=>{
    this.state.userEmail==="philborgenicht@gmail.com"? this.setState({showAddAthlete:true}): alert("sorry, only phil borgenicht can do that")
}
  render(){

    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser =>  <div><button id={authUser.email} onClick={this.setEmail}>Enter Admin Section</button></div>}



  </AuthUserContext.Consumer>

{this.state.showAdmin?
                      <div>
                      <button onClick={this.editTeams}>add teams</button>

                      <button onClick={this.editSports}>add sports</button>

                      <button onClick={this.editAthletes}>add athletes</button>
                      </div>
                      :
                      ''
}
<div className="row">

{this.state.showAddTeam?
  <div className="col-4">
  <h1> add a team </h1>
  </div> : ''}

{this.state.showAddSport?
  <div className="col-4">
  <h1> add a sport </h1>
  </div> : ''}

{this.state.showAddAthlete?
  <div className="col-4">
  <h1> add an athlete </h1>
  </div> : ''}
</div>

</div>

);
}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AdminPage);
