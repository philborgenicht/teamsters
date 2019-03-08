import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Roster from '../../frontend/components/rosters/roster.js'
import './style.css'
import Teams from '../../frontend/components/teams.js'
import Athletes from '../../frontend/components/athletes.js'
import Sports from '../../frontend/components/sports.js'
import Stats from '../../frontend/components/stats.js'

import MyTeams from '../../frontend/components/rosters/myteams.js'
import MySports from '../../frontend/components/rosters/mysports.js'

import Football from '../../frontend/components/sports/football.js'
import Baseball from '../../frontend/components/sports/baseball.js'
import Basketball from '../../frontend/components/sports/basketball.js'
import Hockey from '../../frontend/components/sports/hockey.js'

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
    customers:[],
    sports:[],
    teams:[],
    filterString:'',
    sortedByFirstName:false,
    sortedByLastName:false,
    sortedBySport:false,
    sortedByPosition:false,
    sortedByTeamName:false
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

sortByFirstName=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.name.split(' ')[0])<(ath2.name.split(' ')[0])){
      return -1
    }
    else if((ath1.name.split(' ')[0])>(ath2.name.split(' ')[0])){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:true, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:false, sortedBySport:false})
}


sortByPosition=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.position)<(ath2.position)){
      return -1
    }
    else if((ath1.position)>(ath2.position)){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:true, sortedBySport:false})
}

sortByLastName=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.name.split(' ')[1])<(ath2.name.split(' ')[1])){
      return -1
    }
    else if((ath1.name.split(' ')[1])>(ath2.name.split(' ')[1])){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:true, sortedByTeamName:false, sortedByPosition:false, sortedBySport:false})
}

sortByTeamName=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.teamName)<(ath2.teamName)){
      return -1
    }
    else if((ath1.teamName)>(ath2.teamName)){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:true, sortedByPosition:false, sortedBySport:false})
}

sortBySport=()=>{
  let currentAthletes=this.state.athletes
  let newState=currentAthletes.sort((ath1, ath2)=>{
    if((ath1.sport)<(ath2.sport)){
      return -1
    }
    else if((ath1.sport)>(ath2.sport)){
      return 1
    }
  })
  this.setState({athletes:newState, sortedByFirstName:false, sortedByLastName:false, sortedByTeamName:false, sortedByPosition:false, sortedBySport:true})
}



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
      favoritePlayer:athName,
      favoritePlayerId:athId,

      favoriteSport:sportName,
      favoriteSportId:sportId,

      favoriteTeam:teamName,
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

  acquireSport=(e)=>{
    let sportId=Number.parseInt(e.target.id)
    let currentSports=[...this.state.sports]
    let acquired=currentSports.filter(sport=>sport.id===sportId)
    acquired[0].onList=true

  }

  acquireTeam=(e)=>{
    let currentTeams=[...this.state.teams]
    let teamId=Number.parseInt(e.target.id)
    let chosenTeam=currentTeams.filter(team=>team.id===teamId)[0]
    console.log(chosenTeam)
    chosenTeam.onList=true
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
  removeTeam=(e)=>{
    let teamId=Number.parseInt(e.target.id)
    let currentTeams=[...this.state.teams]
    let discarded=currentTeams.filter(team=>team.id===teamId)[0]
    let discardedIndex=currentTeams.indexOf(discarded)
    discarded.onList=false
    this.setState({
                    teams:[
                            ...this.state.teams.slice(0,discardedIndex),
                            {...discarded, onList:false},
                            ...this.state.teams.slice(discardedIndex+1)
                          ]

                  })

  }
  removeSport=(e)=>{
    let sportId=Number.parseInt(e.target.id)
    let currentSports=[...this.state.sports]
    let discarded=currentSports.filter(sport=>sport.id===sportId)[0]
    let discardedIndex=currentSports.indexOf(discarded)
    discarded.onList=false
    this.setState({
                    sports:[
                            ...this.state.sports.slice(0,discardedIndex),
                            {...discarded, onList:false},
                            ...this.state.sports.slice(discardedIndex+1)
                          ]

                  })

  }

search=(e)=>{
  let userinput=e.target.value
  this.setState({filterString:userinput})
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
<Route exact path={ROUTES.MYSPORTS} render={()=><MySports filterString={this.state.filterString} search={this.search} removeSport={this.removeSport} sports={this.state.sports} teams={this.state.teams} athletes={this.state.athletes}/>}/>

<Route exact path={ROUTES.MYTEAMS} render={()=><MyTeams filterString={this.state.filterString} search={this.search} removeTeam={this.removeTeam} sports={this.state.sports} teams={this.state.teams} athletes={this.state.athletes} />}/>

<Route exact path={ROUTES.FOOTBALL} render={()=><Football
/>}/>

<Route exact path={ROUTES.BASEBALL} render={()=><Baseball
/>}/>

<Route exact path={ROUTES.BASKETBALL} render={()=><Basketball
/>}/>

<Route exact path={ROUTES.HOCKEY} render={()=><Hockey/>}/>

      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ROSTER} render={()=><Roster
                                                      search={this.search}
                                                      filterString={this.state.filterString}
                                                      trade={this.trade}
                                                      athletes={this.state.athletes}
                                                      sports={this.state.sports}
                                                      teams={this.state.teams}
                                                      customers={this.state.customers}
                                                />}/>

<Route exact path={ROUTES.TEAMS} render={()=><Teams
                                                    acquireTeam={this.acquireTeam}
                                                    search={this.search}
                                                    filterString={this.state.filterString}
                                                    athletes={this.state.athletes}
                                                    sports={this.state.sports}
                                                    teams={this.state.teams}
                                                    customers={this.state.customers}
                                />}/>

      <Route exact path={ROUTES.STATS} render={()=><Stats
                                                    filterString={this.state.filterString}
                                                    search={this.search}
                                                    />}/>

      <Route exact path={ROUTES.ATHLETES} render={()=><Athletes
                                                        filterString={this.state.filterString}
                                                        search={this.search}
                                                        draft={this.draft}
                                                        athletes={this.state.athletes}
                                                        sports={this.state.sports}
                                                        teams={this.state.teams}
                                                        customers={this.state.customers}
                                                        sortByFirstName={this.sortByFirstName}
                                                        sortByLastName={this.sortByLastName}
                                                        sortByTeamName={this.sortByTeamName}
                                                        sortByPosition={this.sortByPosition}
                                                        sortBySport={this.sortBySport}
                                                        sortedBySport={this.state.sortedBySport}
                                                        sortedByLastName={this.state.sortedByLastName}
                                                        sortedByFirstName={this.state.sortedByFirstName}
                                                        sortedByTeamName={this.state.sortedByTeamName}
                                                        sortedByPosition={this.state.sortedByPosition}
                                                />}/>

      <Route exact path={ROUTES.SPORTS} render={()=><Sports
                                                        acquireSport={this.acquireSport}
                                                        search={this.search}
                                                        filterString={this.state.filterString}
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
