

import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Roster from '../../frontend/components/rosters/roster.js'

import Team from '../../frontend/components/teams.js'

import Athletes from '../../frontend/components/athletes.js'

import Sports from '../../frontend/components/sports.js'

import Stats from '../../frontend/components/stats.js'

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

class App extends Component{
  state={
    forgotPassword:false,
    changePassword:false,
    athletes:[]
  }
  componentDidMount = async() => {
    const response = await fetch('https://galvanize-borgenicht.herokuapp.com/athletes')
    const athletes = await response.json()

    const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/teams')
    const teams = await response2.json()

    const response3 = await fetch('https://galvanize-borgenicht.herokuapp.com/sports')
    const sports = await response3.json()

    this.setState({athletes:athletes, sports:sports, teams:teams})
  }
// postUser=(e)=>{
//   e.preventDefault()
//   console.log(e.target)
// }
  postUser = async(e) => {
e.preventDefault()
let fullValue=e.target.favAthlete.value.split(', ')
console.log(fullValue[fullValue.length-1])
  await fetch('https://galvanize-borgenicht.herokuapp.com/customers',{
    method: 'POST',
    body: JSON.stringify({
      firstname:e.target.firstname.value,
      lastname:e.target.lastname.value,
      username:e.target.username.value,
      email:e.target.email.value,
      phone:e.target.phone.value,
      favoritePlayer:e.target.favAthlete.value,
      favoritePlayerId:'',

      favoriteSport:e.target.favSport.value,
      favoriteSportId:'',

      favoriteTeam:e.target.favTeam.value,
      favoriteTeamId:'',

      isActive:true,
      isAdmin:false
    }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

}



//
// submitForm=(e)=>{
//   e.preventDefault()
//   const user={
//     firstname:e.target.firstname.value,
//     lastname:e.target.lastname.value,
//     username:e.target.username.value,
//     email:e.target.email.value,
//     phone:e.target.phone.value,
//     favoritePlayer:e.target.favAthlete.value,
//     favoriteTeam:e.target.favTeam.value,
//     favoriteSport:e.target.favSport.value
//   }
//   console.log('USER', user)
// }


  forget=()=>{
    this.setState({forgotPassword:true})
  }
  change=()=>{
    this.setState({changePassword:true})
  }
  remember=()=>{
    this.setState({forgotPassword:false})
  }
  revert=()=>{
    this.setState({changePassword:false})
  }
  render(){
    return(
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ROSTER} render={()=><Roster/>}/>
      <Route exact path={ROUTES.TEAMS} render={()=><Team teams={this.state.teams}/>}/>
      <Route exact path={ROUTES.STATS} render={()=><Stats/>}/>
      <Route exact path={ROUTES.ATHLETES} render={()=><Athletes athletes={this.state.athletes}/>}/>
      <Route exact path={ROUTES.SPORTS} render={()=><Sports sports={this.state.sports}/>}/>
      <Route exact path={ROUTES.ACCOUNT} render={()=>
                                                <AccountPage
                                                  forgotPassword={this.state.forgotPassword}
                                                  changePassword={this.state.changePassword}
                                                  forget={this.forget}
                                                  change={this.change}
                                                  remember={this.remember}
                                                  revert={this.revert}
                                                  athletes={this.state.athletes}
                                                  sports={this.state.sports}
                                                  teams={this.state.teams}
                                                  submitForm={this.submitForm}
                                                  postUser={this.postUser}


                                                  />} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);
}
}

export default withAuthentication(App);
