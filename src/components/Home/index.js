import React, {Component} from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Dashboard from '../../frontend/components/dashboard.js'
import EditProfile from '../../frontend/components/EditProfile.js'
class HomePage extends Component{
  state={userEmail:'', athletes:[], sports:[], teams:[], customers:[], editProfile:false}
  setEmail=(e)=>{
    let email=e.target.id
    this.setState({userEmail:email})
  }
  componentDidMount = async() => {
    const response = await fetch('https://galvanize-borgenicht.herokuapp.com/athletes')
    const athletes = await response.json()

    const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/teams')
    const teams = await response2.json()

    const response3 = await fetch('https://galvanize-borgenicht.herokuapp.com/sports')
    const sports = await response3.json()

    const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
    const customers = await response4.json()


    this.setState({athletes:athletes, sports:sports, teams:teams, customers:customers})
  }
  editProfile=()=>{
    this.setState({editProfile:true})
  }
  render(){
    return(


<div className="container">


<div className="row justify-content-center">
  <AuthUserContext.Consumer>
    {authUser => (  <button className="btn btn-info btn-block" onClick={this.setEmail}id={authUser.email}>view info</button>    )}
  </AuthUserContext.Consumer>

</div>
<br/>
<div className="row">
<div className="col-5">
{this.state.customers.filter(customer=>customer.email===this.state.userEmail).map(customer=>

<div>

  <div className="row">
        <div  className="dashboard">
        <u>FIRST NAME:</u> {customer.firstname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <u>LAST NAME:</u> {customer.lastname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <u>USERNAME:</u> {customer.username}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <u>EMAIL ADDRESS:</u> {customer.email}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <u>PHONE NUMBER:</u> {customer.phone}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <u>FAVORITE PLAYER:</u> {customer.favoritePlayer}

        </div>
  </div>


  <div className="row">
        <div className='col-2'>
        </div>
        <div className="dashboard">
          <u>ID#:</u> {customer.favoritePlayerId}
        </div>
  </div>



  <div className="row">
        <div className="dashboard">
        <u>FAVORITE TEAM:</u> {customer.favoriteTeam}
        </div>
  </div>

  <div className="row">
        <div className="col-2">
        </div>
        <div className="dashboard">
        <u>ID #:</u>{customer.favoriteTeamId}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <u>FAVORITE SPORT:</u> {customer.favoriteSport}
        </div>
  </div>

  <div className="row">
        <div className="col-2">
        </div>
        <div className="dashboard">
        <u>ID #:</u> {customer.favoriteSportId}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <u>ACCOUNT STATUS:</u> {customer.isActive? "ACTIVE" : "DISABLED"}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <u>ACCOUNT PRIVILEGES:</u> {customer.isAdmin? "ADMINISTRATOR" : "STANDARD"}
        </div>
  </div>
<div className="row">
<button onClick={this.editProfile} className="btn btn-block btn-primary">edit profile</button>
</div>

</div>
)}
</div>
<div className='col-2'>
</div>
<div className="col-5">

{this.state.editProfile? <EditProfile
                                    teams={this.state.teams}
                                    customers={this.state.customers}
                                    athletes={this.state.athletes}
                                    sports={this.state.sports}/>: ''}
</div>


</div>


</div>


);
}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
