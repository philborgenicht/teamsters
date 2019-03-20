import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Roster from '../../frontend/components/rosters/roster.js'
import './style.css'
import Teams from '../../frontend/components/teams.js'
import Athletes from '../../frontend/components/athletes.js'
import Sports from '../../frontend/components/sports.js'
import Stats from '../../frontend/components/stats.js'
import Stats2 from '../../frontend/components/stats2.js'
import Stats3 from '../../frontend/components/stats3.js'
import Stats4 from '../../frontend/components/stats4.js'
import Stats5 from '../../frontend/components/stats5.js'

import Players from '../../frontend/components/managerbox/players.js'
import Clubs from '../../frontend/components/managerbox/clubs.js'
import Activities from '../../frontend/components/managerbox/activities.js'
import ManagerBox from '../../frontend/components/managerbox/managerbox.js'
import Description from '../../frontend/components/description.js'

import SportRecruits from '../../frontend/components/managerbox/sportRecruits.js'
import PlayerRecruits from '../../frontend/components/managerbox/playerRecruits.js'
import TeamRecruits from '../../frontend/components/managerbox/teamRecruits.js'
import MyTeams from '../../frontend/components/rosters/myteams.js'
import MySports from '../../frontend/components/rosters/mysports.js'
import Footer from '../../frontend/components/footer.js'
import Football from '../../frontend/components/sports/football.js'
import Baseball from '../../frontend/components/sports/baseball.js'
import Basketball from '../../frontend/components/sports/basketball.js'
import Hockey from '../../frontend/components/sports/hockey.js'
import Practice from '../../frontend/components/rosters/practice.js'
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
    customers_sports:[],
    customers_teams:[],
    customers_athletes:[],
    filterString:'',
    sortedByFirstName:false,
    sortedByLastName:false,
    sortedBySport:false,
    sortedByPosition:false,
    sortedByTeamName:false,
    sortedBySportTitle:false,
    sortedByCityTitle:false,
    sortedByStateTitle:false,
    sortedByTeamTitle:false,
    userEmail:'',
    currentUserAthletes:[],
    currentUserTeams:[],
    currentUserSports:[],
    isEditable:false
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

    const resonse5 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes')
    const customers_athletes = await resonse5.json()

    const response6 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams')
    const customers_teams = await response6.json()

    const response7 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports')
    const customers_sports = await response7.json()




    this.setState({athletes:athletes, sports:sports, teams:teams, customers:customers, customers_athletes:customers_athletes, customers_sports:customers_sports, customers_teams:customers_teams})
  }

  sortByTeamTitle=()=>{
    let currentTeams=this.state.teams
    let newState=currentTeams.sort((team1, team2)=>{
      if((team1.name)<(team2.name)){
        return -1
      }
      else if((team1.name)>(team2.name)){
        return 1
      }
    })
    this.setState({teams:newState, sortedByTeamTitle:true, sortedByCityTitle:false, sortedByStateTitle:false, sortedBySportTitle:false})
  }
  sortByCityTitle=()=>{
    let currentTeams=this.state.teams
    let newState=currentTeams.sort((team1, team2)=>{
      if((team1.city)<(team2.city)){
        return -1
      }
      else if((team1.city)>(team2.city)){
        return 1
      }
    })
    this.setState({teams:newState, sortedByTeamTitle:false, sortedByCityTitle:true, sortedByStateTitle:false, sortedBySportTitle:false})
  }

  sortByStateTitle=()=>{
    let currentTeams=this.state.teams
    let newState=currentTeams.sort((team1, team2)=>{
      if((team1.state)<(team2.state)){
        return -1
      }
      else if((team1.state)>(team2.state)){
        return 1
      }
    })
    this.setState({teams:newState, sortedByTeamTitle:false, sortedByCityTitle:false, sortedByStateTitle:true, sortedBySportTitle:false})
  }

  sortBySportTitle=()=>{
    let currentTeams=this.state.teams
    let newState=currentTeams.sort((team1, team2)=>{
      if((team1.sportName)<(team2.sportName)){
        return -1
      }
      else if((team1.sportName)>(team2.sportName)){
        return 1
      }
    })
    this.setState({teams:newState, sortedByTeamTitle:false, sortedByCityTitle:false, sortedByStateTitle:false, sortedBySportTitle:true})
  }





//
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

document.getElementById('firstname').value=''
document.getElementById('lastname').value=''
document.getElementById('username').value=''
document.getElementById('phone').value=''

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

setUserEmail=(e)=>{
  let email=e.target.id
  this.setState({userEmail:email, isEditable:true})
}

viewMyAthletes=async(e)=>{
let email=e.target.id
console.log(email)
this.setState({userEmail:email, isEditable:true})
let customer=this.state.customers.filter(customer=>customer.email===email)[0]
console.log(customer.id)
let customerId=customer.id
let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes/')
let newData= await newArray.json()
let newAthleteIds=newData.filter(entry=>entry.customerId===customerId).map(entry=>entry.athleteId)
let newAthletes=this.state.athletes.filter(entry=>newAthleteIds.includes(entry.id))
this.setState({currentUserAthletes:newAthletes})
}
viewMySports=async(e)=>{
let email=e.target.id
console.log(email)
this.setState({userEmail:email, isEditable:true})
let customer=this.state.customers.filter(customer=>customer.email===email)[0]
console.log(customer.id)
let customerId=customer.id
let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports/')
let newData= await newArray.json()
let newSportIds=newData.filter(entry=>entry.customerId===customerId).map(entry=>entry.sportId)
let newSports=this.state.sports.filter(entry=>newSportIds.includes(entry.id))
this.setState({currentUserSports:newSports})

}
viewMyTeams=async(e)=>{
let email=e.target.id
console.log(email)
this.setState({userEmail:email, isEditable:true})
let customer=this.state.customers.filter(customer=>customer.email===email)[0]
console.log(customer.id)
let customerId=customer.id
let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams/')
let newData= await newArray.json()
let newTeamIds=newData.filter(entry=>entry.customerId===customerId).map(entry=>entry.teamId)
let newTeams=this.state.teams.filter(entry=>newTeamIds.includes(entry.id))
this.setState({currentUserTeams:newTeams})

}

recruit=async (e)=>{
  let playerId=e.target.id
  let desiredAthlete=this.state.athletes.filter(athlete=>athlete.id==playerId)[0]
  let athleteId=desiredAthlete.id
  let customer=this.state.customers.filter(user=>user.email===this.state.userEmail)[0]
  let customerId=customer.id
  //posting new athlete to an individual user's dashboard
  await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes/',{
    method: 'POST',
    body: JSON.stringify({
      customerId:customerId,
      athleteId:athleteId

    }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes/')
let newData= await newArray.json()
let newAthleteIds=newData.filter(entry=>entry.customerId===customerId).map(entry=>entry.athleteId)
let newAthletes=this.state.athletes.filter(entry=>newAthleteIds.includes(entry.id))
this.setState({currentUserAthletes:newAthletes})
}

recruitTeam=async (e)=>{
  let desiredTeamId=e.target.id
  let desiredTeam=this.state.teams.filter(team=>team.id==desiredTeamId)[0]
  let teamId=desiredTeam.id
  let customer=this.state.customers.filter(user=>user.email===this.state.userEmail)[0]
  let customerId=customer.id
  //posting new team to an individual user's dashboard
  await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams/',{
    method: 'POST',
    body: JSON.stringify({
      customerId:customerId,
      teamId:teamId
    }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams/')
let newData= await newArray.json()
let newTeamIds=newData.filter(entry=>entry.customerId===customerId).map(entry=>entry.teamId)
//
//
let newTeams=this.state.teams.filter(entry=>newTeamIds.includes(entry.id))
this.setState({currentUserTeams:newTeams})
}

recruitSport=async (e)=>{
  let desiredSportId=e.target.id
  let desiredSport=this.state.sports.filter(sport=>sport.id==desiredSportId)[0]

  let sportId=desiredSport.id
  let customer=this.state.customers.filter(user=>user.email===this.state.userEmail)[0]
  console.log(customer)
  let customerId=customer.id
  await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports/',{
    method: 'POST',
    body: JSON.stringify({
      customerId:customerId,
      sportId:sportId
    }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports/')
let newData= await newArray.json()

let newSportIds=newData.filter(entry=>entry.customerId===customerId).map(entry=>entry.sportId)
let newSports=this.state.sports.filter(entry=>newSportIds.includes(entry.id))
this.setState({currentUserSports:newSports})
}
deleteSport=async (e)=>{
  let sportId=e.target.id
  console.log(sportId)
  let sportToRelease=this.state.sports.filter(sport=>sport.id==sportId)[0]
  console.log(sportToRelease)
  let customerEmail=this.state.userEmail
  let customer=this.state.customers.filter(customer=>customer.email===customerEmail)[0]
  console.log(customer)
  let sportIdDelete=sportToRelease.id
  let customerId=customer.id
  let entryToDelete=this.state.customers_sports.filter(entry=>entry.customerId==customer.id && entry.sportId==sportIdDelete)[0]
  console.log(entryToDelete)
  let idToDelete=entryToDelete.id
  await fetch(`https://galvanize-borgenicht.herokuapp.com/customers_sports/${idToDelete}`,{
    method: 'DELETE',

  })
  let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_sports/')
  let newData= await newArray.json()

  let newSportIds=newData.filter(entry=>entry.customerId==customerId).map(entry=>entry.sportId)
  let newSports=this.state.sports.filter(entry=>newSportIds.includes(entry.id))
  this.setState({currentUserSports:newSports})
}

deletePlayer=async (e)=>{
  let playerId=e.target.id
  let playertorelease=this.state.athletes.filter(athlete=>athlete.id==playerId)[0]
  let customeremail=this.state.userEmail
  let customer=this.state.customers.filter(customer=>customer.email===customeremail)[0]
  let customerId=customer.id
  let athleteId=playertorelease.id
  console.log(customerId, athleteId)
  let entryToDelete=this.state.customers_athletes.filter(entry=>entry.customerId==customer.id && entry.athleteId==athleteId)[0]
  let idToDelete=entryToDelete.id
  console.log(entryToDelete, idToDelete)
  await fetch(`https://galvanize-borgenicht.herokuapp.com/customers_athletes/${idToDelete}`,{
    method: 'DELETE',
  })
  let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes/')
  let newData= await newArray.json()
  console.log(newData)
  let currentCustomersAthletes=newData
  console.log(currentCustomersAthletes)
  let newEntries=currentCustomersAthletes.filter(entry=>entry.customerId==customerId)
  let athleteIds=newEntries.map(entry=>entry.athleteId)
  let newAthletes=this.state.athletes.filter(entry=>athleteIds.includes(entry.id))
  this.setState({currentUserAthletes:newAthletes})

}



deleteTeam=async (e)=>{
  let teamId=e.target.id
  let teamToRelease=this.state.teams.filter(team=>team.id==teamId)[0]


  let customeremail=this.state.userEmail
  let customer=this.state.customers.filter(customer=>customer.email===customeremail)[0]
  let customerId=customer.id
  let teamToReleaseId=teamToRelease.id

  let entryToDelete=this.state.customers_teams.filter(entry=>entry.customerId==customerId && entry.teamId==teamToReleaseId)[0]
  let idToDelete=entryToDelete.id
  await fetch(`https://galvanize-borgenicht.herokuapp.com/customers_teams/${idToDelete}`,{
    method: 'DELETE',
  })
  let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams/')
  let newData= await newArray.json()

  let newTeamsList=newData.filter(entry=>entry.customerId==customerId)
  let newTeamsIdsArray=newTeamsList.map(entry=>entry.teamId)
  let newTeams=this.state.teams.filter(entry=>newTeamsIdsArray.includes(entry.id))
  this.setState({currentUserTeams:newTeams})
}


  render(){
    return(
  <Router>
    <div>
      <Navigation className="sticky-top" search={this.search}/>

      <hr />
<Route exact path={ROUTES.PRACTICE} render={()=><Practice/>}/>

<Route exact path={ROUTES.DESCRIPTION} render={()=><Description/>}/>

<Route exact path={ROUTES.MANAGERBOX} render={()=><ManagerBox/>}/>

<Route exact path={ROUTES.PLAYERS} render={()=><Players
  deletePlayer={this.deletePlayer}
  viewMyAthletes={this.viewMyAthletes}
  isEditable={this.state.isEditable}
  currentUserAthletes={this.state.currentUserAthletes}
  setUserEmail={this.setUserEmail}
  userEmail={this.state.userEmail}
  athletes={this.state.athletes}
  customers={this.state.customers}
  teams={this.state.teams}
  sports={this.state.sports}
  filterString={this.state.filterString}
  customers_sports={this.state.customers_sports}
  customers_teams={this.state.customers_teams}
  customers_athletes={this.state.customers_athletes}
  draft={this.draft}
  trade={this.trade} />}/>

<Route exact path={ROUTES.CLUBS} render={()=><Clubs
  deleteTeam={this.deleteTeam}
  viewMyTeams={this.viewMyTeams}
  isEditable={this.state.isEditable}
  setUserEmail={this.setUserEmail}
  currentUserTeams={this.state.currentUserTeams}
userEmail={this.state.userEmail}
  athletes={this.state.athletes}
  customers={this.state.customers}
  teams={this.state.teams}
  sports={this.state.sports}
  customers_sports={this.state.customers_sports}
  customers_teams={this.state.customers_teams}
  customers_athletes={this.state.customers_athletes}
  filterString={this.state.filterString}
  acquireTeam={this.acquireTeam}
  removeTeam={this.removeTeam}
   />}/>

<Route exact path={ROUTES.ACTIVITIES} render={()=><Activities
  viewMySports={this.viewMySports}
  deleteSport={this.deleteSport}
  isEditable={this.state.isEditable}
  currentUserSports={this.state.currentUserSports}
  setUserEmail={this.setUserEmail}
  userEmail={this.state.userEmail}
  athletes={this.state.athletes}
  customers={this.state.customers}
  teams={this.state.teams}
  sports={this.state.sports}
  customers_sports={this.state.customers_sports}
  customers_teams={this.state.customers_teams}
  customers_athletes={this.state.customers_athletes}
  filterString={this.state.filterString}
  acquireSport={this.acquireSport}
  removeSport={this.removeSport} />}/>

<Route exact path={ROUTES.STATS2} render={()=><Stats2  filterString={this.state.filterString}/>}/>
<Route exact path={ROUTES.STATS3} render={()=><Stats3 filterString={this.state.filterString}/>}/>
<Route exact path={ROUTES.STATS4} render={()=><Stats4 filterString={this.state.filterString}/>}/>
<Route exact path={ROUTES.STATS5} render={()=><Stats5 filterString={this.state.filterString}/>}/>


<Route exact path={ROUTES.LANDING} render={()=><LandingPage userEmail={this.state.userEmail}/>}/>

<Route exact path={ROUTES.SIGN_UP} render={()=><SignUpPage />}/>
<Route exact path={ROUTES.SIGN_IN} render={()=><SignInPage />}/>

<Route exact path={ROUTES.SPORT_RECRUITS} render={()=><SportRecruits
  isEditable={this.state.isEditable}
  setUserEmail={this.setUserEmail}
  userEmail={this.state.userEmail}
  recruitSport={this.recruitSport}
                                                      customers={this.state.customers}
                                                      sortBySportTitle={this.sortBySportTitle}
                                                      filterString={this.state.filterString}
                                                      sports={this.state.sports}
                                                      sortedBySportTitle={this.state.sortedBySportTitle}
                                                      athletes={this.state.athletes}
                                                      customers={this.state.customers}
                                                      teams={this.state.teams}
                                                      sports={this.state.sports}
                                                      customers_sports={this.state.customers_sports}
                                                      customers_teams={this.state.customers_teams}
                                                      customers_athletes={this.state.customers_athletes}
                                                      acquireSport={this.acquireSport}
                                                      removeSport={this.removeSport}
                                                        />}/>


<Route exact path={ROUTES.TEAM_RECRUITS} render={()=><TeamRecruits
  isEditable={this.state.isEditable}
  setUserEmail={this.setUserEmail}
  userEmail={this.state.userEmail}
  recruitTeam={this.recruitTeam}
                                                      sortByTeamTitle={this.sortByTeamTitle}
                                                      sortByCityTitle={this.sortByCityTitle}
                                                      sortByStateTitle={this.sortByStateTitle}
                                                      sortBySportTitle={this.sortBySportTitle}
                                                      filterString={this.state.filterString}
                                                      sortedByTeamTitle={this.state.sortedByTeamTitle}
                                                      sortedByCityTitle={this.state.sortedByCityTitle}
                                                      sortedByStateTitle={this.state.sortedByStateTitle}
                                                      sortedBySportTitle={this.state.sortedBySportTitle}
                                                      athletes={this.state.athletes}
                                                      customers={this.state.customers}
                                                      teams={this.state.teams}
                                                      sports={this.state.sports}
                                                      customers_sports={this.state.customers_sports}
                                                      customers_teams={this.state.customers_teams}
                                                      customers_athletes={this.state.customers_athletes}
                                                      acquireTeam={this.acquireTeam}
                                                      removeTeam={this.removeTeam}
                                                        />}/>

<Route exact path={ROUTES.PLAYER_RECRUITS} render={()=><PlayerRecruits
  isEditable={this.state.isEditable}
  setUserEmail={this.setUserEmail}
  userEmail={this.state.userEmail}
                                                        recruit={this.recruit}
                                                        filterString={this.state.filterString}
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
                                                        athletes={this.state.athletes}
                                                        customers={this.state.customers}
                                                        teams={this.state.teams}
                                                        sports={this.state.sports}
                                                        customers_sports={this.state.customers_sports}
                                                        customers_teams={this.state.customers_teams}
                                                        customers_athletes={this.state.customers_athletes}
                                                        draft={this.draft}
                                                        trade={this.trade}
                                                        />}/>

      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
<Route exact path={ROUTES.MYSPORTS} render={()=><MySports filterString={this.state.filterString} search={this.search} removeSport={this.removeSport} sports={this.state.sports} teams={this.state.teams} athletes={this.state.athletes}/>}/>

<Route exact path={ROUTES.MYTEAMS} render={()=><MyTeams filterString={this.state.filterString} search={this.search} removeTeam={this.removeTeam} sports={this.state.sports} teams={this.state.teams} athletes={this.state.athletes} />}/>

<Route exact path={ROUTES.FOOTBALL} render={()=><Football/>}/>

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
                                                    sortByTeamTitle={this.sortByTeamTitle}
                                                    sortByCityTitle={this.sortByCityTitle}
                                                    sortByStateTitle={this.sortByStateTitle}
                                                    sortBySportTitle={this.sortBySportTitle}

                                                    sortedByTeamTitle={this.state.sortedByTeamTitle}
                                                    sortedByCityTitle={this.state.sortedByCityTitle}
                                                    sortedByStateTitle={this.state.sortedByStateTitle}
                                                    sortedBySportTitle={this.state.sortedBySportTitle}

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
                                                  userEmail={this.state.userEmail}
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


<Footer />
    </div>

  </Router>
);
}
}

export default withAuthentication(App);
