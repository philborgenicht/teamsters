import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Athletes from './components/athletes.js'
import Dashboard from './components/dashboard.js'
import Footer from './components/footer.js'
import Sports from './components/sports.js'
import Teams from './components/teams.js'
import Toolbar from './components/toolbar.js'
import Landing from './components/landing.js'
import Roster from './components/rosters/roster.js'
import Signup from './components/registry/signup.js'
import Login from './components/registry/login.js'

class Homepage extends Component {

    state={
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
      loggedIn:false
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





    async componentDidMount() {
      const response = await fetch('https://desolate-eyrie-95298.herokuapp.com/athletes')
      const athletes = await response.json()

      const response2 = await fetch('https://desolate-eyrie-95298.herokuapp.com/customers')
      const customers = await response2.json()

      const response3 = await fetch('https://desolate-eyrie-95298.herokuapp.com/teams')
      const teams = await response3.json()

      const response4 = await fetch('https://desolate-eyrie-95298.herokuapp.com/sports')
      const sports = await response4.json()

      const response5 = await fetch("https://desolate-eyrie-95298.herokuapp.com/rosters")
      const rosters = await response5.json()

      this.setState({athletes:athletes, customers:customers, teams:teams, sports:sports, rosters:rosters})


    }

  render() {
    return (
      <div className="App component">
      <div>
      <Toolbar
              showLogin={this.showLogin}
              showSignup={this.showSignup}
              login={this.login}
              logout={this.logout}
              loggedIn={this.state.loggedIn}
              viewSports={this.showSports}
              viewTeams={this.showTeams}
              viewAthletes={this.showAthletes}
              viewDashboard={this.showDashboard}/>
      </div>

<div className="container">
<div className="row">

      {this.state.showLanding?
        <div>
        <Landing/>
        <button className="btn btn-outline-primary" onClick={this.hideLanding}> dismiss about us </button>
        </div>
         : <button className="btn btn-outline-primary" onClick={this.showLanding}> view about us</button>}

</div>

<div className="row">
{this.state.showSignup? <Signup signup={this.signup}/> : ''}
</div>

<div className="row">
{this.state.showLogin? <Login login={this.login}/> : ''}
</div>

<div>
      {this.state.showRoster?
      <div>
        <Roster athletes={this.state.athletes} rosters={this.state.rosters}/>
        <button className="btn btn-outline-primary" onClick={this.hideRoster}> dismiss roster </button>
        </div> : <button className={this.state.showSignup||this.state.showLogin||this.state.showAthletes||this.state.showTeams||this.state.showSports||this.state.showDashboard?"invisible":"btn btn-outline-primary"} onClick={this.showRoster}> View roster</button>}
</div>
<div>
      {this.state.showAthletes?
        <div>
        <Athletes athletes={this.state.athletes}/>
        <button className="btn btn-outline-primary" onClick={this.hideAthletes}> dismiss athletes </button>
        </div> : <button className={this.state.showSignup||this.state.showLogin||this.state.showRoster||this.state.showTeams||this.state.showSports||this.state.showDashboard?"invisible":"btn btn-outline-primary"} onClick={this.showAthletes}> View Athletes</button>}
</div>
<div>
      {this.state.showSports?
        <div>
        <Sports sports={this.state.sports}/>
        <button className="btn btn-outline-primary" onClick={this.hideSports}> dismiss sports </button>
        </div> : <button className={this.state.showSignup||this.state.showLogin||this.state.showAthletes||this.state.showTeams||this.state.showRoster||this.state.showDashboard?"invisible":"btn btn-outline-primary"} onClick={this.showSports}> View Sports </button>}
</div>
<div>
      {this.state.showTeams?
        <div>
        <Teams teams={this.state.teams}/>
        <button className="btn btn-outline-primary" onClick={this.hideTeams}> dismiss teams </button>
        </div> : <button className={this.state.showSignup||this.state.showLogin||this.state.showAthletes||this.state.showRoster||this.state.showSports||this.state.showDashboard?"invisible":"btn btn-outline-primary"} onClick={this.showTeams}> View Teams </button>}
</div>
<div>
      {this.state.showDashboard?
        <div>
        <Dashboard customers={this.state.customers}/>
        <button className="btn btn-outline-primary" onClick={this.hideDashboard}> dismiss dashboard </button>
        </div> : <button className={this.state.showSignup||this.state.showLogin||this.state.showAthletes||this.state.showTeams||this.state.showSports||this.state.showRoster?"invisible":"btn btn-outline-primary"} onClick={this.showDashboard}> View Dashboard </button> }
</div>






<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <div className="fixed-bottom">
      <Footer />
      </div>
</div>
</div>
    );
  }
}

export default Homepage;
