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
  showAddAthlete:false,
  teams:[],
  athletes:[],
  sports:[],
  customers:[]
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
setEmail=(e)=>{

  let newEmail=e.target.id
  this.setState({userEmail:newEmail, showAdmin:true})
}

editTeams=()=>{
  this.state.userEmail==="philborgenicht@gmail.com"? this.setState({showAddTeam:true}): alert("sorry, only phil borgenicht can do that")
}


editAthletes=()=>{
    this.state.userEmail==="philborgenicht@gmail.com"? this.setState({showAddAthlete:true}): alert("sorry, only phil borgenicht can do that")
}


submitTeam = async(e) => {
e.preventDefault()
let fullSport=e.target.sport.value.split(', ')
let sportName=fullSport.slice(0, fullSport.length-1)[0]
let sportId=Number.parseInt(fullSport[fullSport.length-1])
await fetch('https://galvanize-borgenicht.herokuapp.com/teams',{
  method: 'POST',
  body: JSON.stringify({
    name:e.target.teamName.value,
    city:e.target.city.value,
    state:e.target.state.value,
    sportName:sportName,
    sportId:sportId,
    onList:false,
  }),
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})
}

submitAthlete= async(e) => {
e.preventDefault()
console.log("name", e.target.name.value, "sport", e.target.sport.value.split(', '), "team", e.target.team.value.split(', '), "position", e.target.position.value)
let fullSport=e.target.sport.value.split(', ')
let sportName=fullSport.slice(0, fullSport.length-1)[0]
let sportId=Number.parseInt(fullSport[fullSport.length-1])

let fullTeam=e.target.team.value.split(', ')
let teamName=fullTeam.slice(0, fullTeam.length-1)[0]
let teamId=Number.parseInt(fullTeam[fullTeam.length-1])
await fetch('https://galvanize-borgenicht.herokuapp.com/athletes',{
  method: 'POST',
  body: JSON.stringify({
    name:e.target.name.value,
    sport:sportName,
    sportId:sportId,
    teamName:teamName,
    teamId:teamId,
    position:e.target.position.value,
    onTeam:false,
  }),
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})
}



  render(){

    return(

<div className="container">
<div className="row justify-content-center">

  <AuthUserContext.Consumer>
    {authUser =>  <div><button className="btn btn-info btn-lg btn-block"id={authUser.email} onClick={this.setEmail}>Enter Admin Section</button></div>}



  </AuthUserContext.Consumer>
</div>
<br/><br/>

{this.state.showAdmin?
                      <div className="row justify-content-center">
                      <div className='col-6'>
                      <button className="btn btn-info btn-lg btn-block" onClick={this.editTeams}>add teams</button>
                      </div>

                      <div className='col-6'>
                      <button className="btn btn-info btn-lg btn-block" onClick={this.editAthletes}>add athletes</button>
                      </div>
                      </div>
                      :
                      ''
}
<div className="row justify-content-center">





{this.state.showAddTeam?
  <div className="col-6">
  <h1> Add a Team </h1>
  <form onSubmit={this.submitTeam}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="teamName">Team Name</label>
      <input type="text" className="form-control" id="teamName" placeholder="Team Name" required/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="city">Team City</label>
      <input type="text" class="form-control" id="city" placeholder="City" required/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="state">Team State</label>
    <input type="text" class="form-control" id="state" placeholder="State" required/>
  </div>
  <div className="form-group">
    <label htmlFor="sport">Sport Affiliation</label>
    <select className="form-control" id="sport">
    {this.state.sports.map(sport=><option id={sport.id}>{sport.name}, {sport.id}</option>)}
    </select>
  </div>

  <div className="form-group">
  </div>
  <button className="btn btn-block btn-dark" type="submit" className="btn btn-primary">submit</button>
</form>
  </div> : ''}



{this.state.showAddAthlete?
  <div className="col-6">
  <h1> Add an Athlete </h1>
  <form onSubmit={this.submitAthlete}>
  <div className="form-row">
    <div className="form-group-sm col-md-6">
      <label htmlFor="name">Athlete Name</label>
      <input type="text" className="form-control" id="name" placeholder="athlete name" required/>
    </div>
    <div className="form-group-sm col-md-6">
      <label htmlFor="sport">Sport</label>
      <select className="form-control" id="sport">
      {this.state.sports.map(sport=><option id={sport.id}>{sport.name}, {sport.id}</option>)}
      </select>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="team">Current Team</label>
    <select className="form-control" id="team">
    {this.state.teams.map(team=><option id={team.id}>{team.name}, {team.id}</option>)}
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="position">Position</label>
    <input type="text" className="form-control" id="position" placeholder="position" required/>
  </div>


  <button className="btn btn-block btn-dark" type="submit" className="btn btn-primary">Submit</button>
</form>
  </div> : ''}





</div>
</div>



);
}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AdminPage);
