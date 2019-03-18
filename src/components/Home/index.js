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


  updateProfile=(e)=>{
    console.log(e.target)
    let clientId=this.state.customers.filter(customer=>customer.email===this.state.userEmail).map(customer=>customer.id)[0]
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
        <span>FIRST NAME:</span> {customer.firstname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span>LAST NAME:</span> {customer.lastname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span>USERNAME:</span> {customer.username}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span>EMAIL ADDRESS:</span> {customer.email}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span>PHONE NUMBER:</span> {customer.phone}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <span>FAVORITE PLAYER:</span> {customer.favoritePlayer}

        </div>
  </div>


  <div className="row">
        <div className='col-2'>
        </div>
        <div className="dashboard">
          <span>ID#:</span> {customer.favoritePlayerId}
        </div>
  </div>



  <div className="row">
        <div className="dashboard">
        <span>FAVORITE TEAM:</span> {customer.favoriteTeam}
        </div>
  </div>

  <div className="row">
        <div className="col-2">
        </div>
        <div className="dashboard">
        <span>ID #:</span>{customer.favoriteTeamId}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <span>FAVORITE SPORT:</span> {customer.favoriteSport}
        </div>
  </div>

  <div className="row">
        <div className="col-2">
        </div>
        <div className="dashboard">
        <span>ID #:</span> {customer.favoriteSportId}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <span>ACCOUNT STATUS:</span> {customer.isActive? "ACTIVE" : "DISABLED"}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <span>ACCOUNT PRIVILEGES:</span> {customer.isAdmin? "ADMINISTRATOR" : "STANDARD"}
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
                                    editProfile={this.updateProfile}
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
