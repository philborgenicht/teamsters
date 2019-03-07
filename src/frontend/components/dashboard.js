import React, {Component} from 'react'
import EditProfile from './EditProfile.js'
class Dashboard extends Component {

state={
  customers:[],
  customer:[]
}
async componentDidMount() {
  const response = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
  const customers = await response.json()

  const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/athletes')
  const athletes = await response2.json()

  const response3 = await fetch('https://galvanize-borgenicht.herokuapp.com/teams')
  const teams = await response3.json()

  const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/sports')
  const sports = await response4.json()


  this.setState({customers:customers, athletes:athletes, sports:sports, teams:teams})
  console.log(this.state)

}

editProfile=()=>{
  this.setState({editProfile:true})
}

render(){
  const customerId=1
    return(
      <div className="container ">
<div className="row justify-content-center">
<h1 className="heading"> ACCOUNT INFORMATION:</h1>
</div>
<div>
      {this.state.customers.filter(customer=>
      customer.id===customerId).map(customer=>
      <div className="row">

      <div className="col-6">


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
      <div className="col-6">
      <button className= "btn-lg btn-outline-primary" onClick={this.editProfile}>Edit Profile </button>
      {this.state.editProfile? <EditProfile
                                            customers={this.state.customers}
                                            athletes={this.state.athletes}
                                            sports={this.state.sports}
                                            teams={this.state.teams}

                                            /> : ''}
      </div>

      </div>
    )}
  </div>
  </div>

    )

}
}

export default Dashboard
