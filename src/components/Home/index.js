import React, {Component} from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Dashboard from '../../frontend/components/dashboard.js'
class HomePage extends Component{
  state={userEmail:'', athletes:[], sports:[], teams:[], customers:[]}
  setEmail=(e)=>{
    let email=e.target.id
    this.setState({userEmail:email})
    console.log(this.state.userEmail)
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
  render(){
    return(


<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <button onClick={this.setEmail}id={authUser.email}>view info</button>    )}
  </AuthUserContext.Consumer>

{this.state.customers.filter(customer=>customer.email===this.state.userEmail).map(customer=>
  <div>
  <div className="row">
        <div  className="dashboard">
        FIRST NAME: {customer.firstname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        LAST NAME: {customer.lastname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        USERNAME: {customer.username}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        EMAIL ADDRESS: {customer.email}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        PHONE NUMBER: {customer.phone}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        FAVORITE PLAYER: {customer.favoritePlayer}

        </div>
  </div>


  <div className="row">
        <div className='col-2'>
        </div>
        <div className="dashboard">
          ID#: {customer.favoritePlayerId}
        </div>
  </div>



  <div className="row">
        <div className="dashboard">
        FAVORITE TEAM: {customer.favoriteTeam}
        </div>
  </div>

  <div className="row">
        <div className="col-2">
        </div>

        <div className="dashboard">
        ID #: {customer.favoriteTeamId}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        FAVORITE SPORT: {customer.favoriteSport}
        </div>
  </div>

  <div className="row">
        <div className="col-2">
        </div>
        <div className="dashboard">
        ID #: {customer.favoriteSportId}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        ACCOUNT STATUS: {customer.isActive? "ACTIVE" : "DISABLED"}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        ACCOUNT PRIVILEGES: {customer.isAdmin? "ADMINISTRATOR" : "STANDARD"}
        </div>
  </div>
  </div>
)}
</div>
);
}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
