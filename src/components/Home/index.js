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


  updateProfile=async(e)=>{
    e.preventDefault()
    console.log(e.target)
    let client=this.state.customers.filter(customer=>customer.email===this.state.userEmail)[0]
    let clientId=client.id
    console.log(clientId)
    let newfirstname=e.target.firstname.value
    let newlastname=e.target.lastname.value
    let fullplayer=e.target.favAthlete.value
    let fullsport=e.target.favSport.value
    let fullteam=e.target.favTeam.value
    console.log(fullplayer, fullsport, fullteam)
    let splitplayer=fullplayer.split(', ')
    let splitsport=fullsport.split(', ')
    let splitteam=fullteam.split(', ')
    console.log(splitteam, splitsport, splitplayer)
    let playername=splitplayer[0]
    let teamname=splitteam[0]
    let sportname=splitsport[0]
    let playerid=Number.parseInt(splitplayer[1])
    let teamid=Number.parseInt(splitteam[1])
    let sportid=Number.parseInt(splitsport[1])
    console.log(playerid, teamid, sportid, playername, teamname, sportname)
    await fetch(`https://galvanize-borgenicht.herokuapp.com/customers/${clientId}`,{
      method: 'PATCH',
      body: JSON.stringify({
        firstname:newfirstname,
        lastname:newlastname,

        favoritePlayer:playername,
        favoritePlayerId:playerid,

        favoriteSport:sportname,
        favoriteSportId:sportid,

        favoriteTeam:teamname,
        favoriteTeamId:teamid,

        isActive:true,
        isAdmin:false
      }),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    let newArray= await fetch('https://galvanize-borgenicht.herokuapp.com/customers/')
    let newData= await newArray.json()

    this.setState({customers:newData})
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
        <span><u>First Name:</u></span> {customer.firstname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span><u>Last Name:</u></span> {customer.lastname}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span><u>Username:</u></span> {customer.username}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span><u>Email Address:</u></span> {customer.email}
        </div>
  </div>

  <div className="row">
        <div  className="dashboard">
        <span><u>Phone Number:</u></span> {customer.phone}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <span><u>Favorite Athlete:</u></span> {customer.favoritePlayer}

        </div>
  </div>






  <div className="row">
        <div className="dashboard">
        <span><u>Favorite Team:</u></span> {customer.favoriteTeam}
        </div>
  </div>



  <div className="row">
        <div className="dashboard">
        <span><u>Favorite Sport:</u></span> {customer.favoriteSport}
        </div>
  </div>



  <div className="row">
        <div className="dashboard">
        <span><u>Account Status:</u></span> {customer.isActive? "ACTIVE" : "DISABLED"}
        </div>
  </div>

  <div className="row">
        <div className="dashboard">
        <span><u>Account Privileges:</u></span> {customer.isAdmin? "ADMINISTRATOR" : "STANDARD"}
        </div>
  </div>
  <hr/>
<div className="row">
<button onClick={this.editProfile} className="btn btn-block btn-primary">Make Changes</button>
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
