import React, { Component } from 'react';
// import './App.css';
// import Athletes from './components/athletes.js'
// import Dashboard from './components/dashboard.js'
// import Footer from './components/footer.js'
// import Sports from './components/sports.js'
// import Teams from './components/teams.js'
// import Toolbar from './components/toolbar.js'
// import Landing from './components/landing.js'
// import Roster from './components/rosters/roster.js'
// import Signup from './components/registry/signup.js'
// import Login from './components/registry/login.js'
import { AuthUserContext } from '../components/Session';

import { withAuthorization } from '../components/Session';

import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

class Base extends Component {
  state={
    forgotPassword:false,
    changePassword:false,

    filterString:'',
      customers:[],
      sports:[],
      teams:[],
      athletes:[],
      rosters:[],
      showLanding:true,
      showAthletes:false,
      showSports:false,
      showTeams:false,
      showDashboard:false,
      showRoster:false,
      showSignup:false,
      showLogin:false,
      loggedIn:false,
      useremail:''
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
  let userinput=e.target.value
  this.setState({filterString:userinput})
}



showLogin=()=>{
  this.setState({showLogin:true, showLanding:false, showRoster:false, showAthletes:false, showSports:false, showTeams:false, showDashboard:false, showSignup:false})
}
hideLogin=()=>{
  this.setState({showLogin:false})
}
showSignup=()=>{
  this.setState({showSignup:true, showLanding:false, showRoster:false, showAthletes:false, showSports:false, showTeams:false, showDashboard:false, showLogin:false})
}

hideSignup=()=>{
  this.setState({showSignup:false})
}


hideLanding=()=>{
  this.setState({showLanding:false})
}

showAthletes=()=>{
  this.setState({showAthletes:true, showLanding:false, showSports:false, showTeams:false, showDashboard:false, showRoster:false})
}

showSports=()=>{
  this.setState({showSports:true, showLanding:false, showAthletes:false, showTeams:false, showDashboard:false, showRoster:false})
}

showTeams=()=>{
  this.setState({showTeams:true, showLanding:false, showAthletes:false, showSports:false, showDashboard:false, showRoster:false})
}

showDashboard=()=>{
  this.setState({showDashboard:true, showTeams:false, showAthletes:false, showSports:false, showLanding:false, showRoster:false})
}

showLanding=()=>{
  this.setState({showLanding:true, showTeams:false, showAthletes:false, showSports:false, showDashboard:false, showRoster:false})
}
hideAthletes=()=>{
  this.setState({showAthletes:false})
}

hideSports=()=>{
  this.setState({showSports:false})
}

hideTeams=()=>{
  this.setState({showTeams:false})
}

hideDashboard=()=>{
  this.setState({showDashboard:false})
}

showRoster=()=>{
  this.setState({showRoster:true, showTeams:false, showAthletes:false, showSports:false, showDashboard:false})
}
hideRoster=()=>{
  this.setState({showRoster:false})
}
login=()=>{
  this.setState({loggedIn:true})
}
logout=()=>{
  this.setState({loggedIn:false})
}






  render() {
    let useremail
    return (
<div className='container'>


<h1> thank you for signing up, <br/>please click <span><Link to={ROUTES.ACCOUNT}>Here</Link></span> to complete your profile</h1>
<div>
<AuthUserContext.Consumer>
  {authUser => useremail=authUser.email}
</AuthUserContext.Consumer>
</div>






</div>
    );
  }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Base);
