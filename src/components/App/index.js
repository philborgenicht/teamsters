

import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Roster from '../../frontend/components/rosters/roster.js'
import './style.css'
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
    athletes:[],
    filterString:''
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
// postUser=(e)=>{
//   e.preventDefault()
//   console.log(e.target)
// }
  postUser = async(e) => {
e.preventDefault()
let fullAthlete=e.target.favAthlete.value.split(', ')
let athName=fullAthlete.slice(0, fullAthlete.length-1)[0]
let athId=Number.parseInt(fullAthlete[fullAthlete.length-1])

let fullTeam=e.target.favTeam.value.split(', ')
let teamName=fullTeam.slice(0, fullTeam.length-1)[0]
let teamId=Number.parseInt(fullTeam[fullTeam.length-1])

let fullSport=e.target.favSport.value.split(', ')
let sportName=fullSport.slice(0, fullSport.length-1)[0]
let sportId=Number.parseInt(fullSport[fullSport.length-1])

console.log(athName, athId, teamName, teamId, sportName, sportId)

  await fetch('https://galvanize-borgenicht.herokuapp.com/customers',{
    method: 'POST',
    body: JSON.stringify({
      firstname:e.target.firstname.value,
      lastname:e.target.lastname.value,
      username:e.target.username.value,
      email:e.target.email.value,
      phone:e.target.phone.value,
      favoritePlayer:e.target.favAthlete.value,
      favoritePlayerId:athId,

      favoriteSport:e.target.favSport.value,
      favoriteSportId:sportId,

      favoriteTeam:e.target.favTeam.value,
      favoriteTeamId:teamId,

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

  draft=(e)=>{
    let playerid=Number.parseInt(e.target.id)
    let currentAthletes=[...this.state.athletes]
    let drafted=currentAthletes.filter(athlete=>athlete.id===playerid)
    drafted[0].onTeam=true
    console.log(drafted[0].onTeam)
  }

  trade=(e)=>{
    let playerid=Number.parseInt(e.target.id)
    let currentAthletes=[...this.state.athletes]
    let traded=currentAthletes.filter(athlete=>athlete.id===playerid)[0]
    let tradedIndex=currentAthletes.indexOf(traded)
    traded.onTeam=false
    this.setState({
                    athletes:[
                            ...this.state.athletes.slice(0,tradedIndex),
                            {...traded, onTeam:false},
                            ...this.state.athletes.slice(tradedIndex+1)
                          ]

                  })

  }

search=(e)=>{
  console.log(e.target.value)
}

  render(){
    return(
  <Router>
    <div>
      <Navigation search={this.search}/>

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
      <Route exact path={ROUTES.ROSTER} render={()=><Roster
                                                      trade={this.trade}
                                                      athletes={this.state.athletes}
                                                      sports={this.state.sports}
                                                      teams={this.state.teams}
                                                      customers={this.state.customers}
                                                />}/>

      <Route exact path={ROUTES.TEAMS} render={()=><Team
                                                      athletes={this.state.athletes}
                                                      sports={this.state.sports}
                                                      teams={this.state.teams}
                                                      customers={this.state.customers}
                                                />}/>

      <Route exact path={ROUTES.STATS} render={()=><Stats/>}/>

      <Route exact path={ROUTES.ATHLETES} render={()=><Athletes
                                                        draft={this.draft}
                                                        athletes={this.state.athletes}
                                                        sports={this.state.sports}
                                                        teams={this.state.teams}
                                                        customers={this.state.customers}
                                                />}/>

      <Route exact path={ROUTES.SPORTS} render={()=><Sports
                                                        athletes={this.state.athletes}
                                                        sports={this.state.sports}
                                                        teams={this.state.teams}
                                                        customers={this.state.customers}



                                                />}/>

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
    <Route exact path={ROUTES.ADMIN} render={()=><AdminPage


                                                  sports={this.state.sports}
                                                  />}
                                                  />

    </div>
  </Router>
);
}
}

export default withAuthentication(App);
