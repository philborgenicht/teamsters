import React, {Component} from 'react'
import EditProfile from './EditProfile.js'
class Dashboard extends Component {

state={
  editProfile:false
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
      {this.props.customers.filter(customer=>
      customer.id===customerId).map(customer=>
      <div className="row">

      <div className="col-6">


              <div className="row">
                    <div  className="dashboard">
                    FIRST NAME: {customer.firstName}
                    </div>
              </div>

              <div className="row">
                    <div  className="dashboard">
                    LAST NAME: {customer.lastName}
                    </div>
              </div>

              <div className="row">
                    <div  className="dashboard">
                    USERNAME: {customer.userName}
                    </div>
              </div>

              <div className="row">
                    <div  className="dashboard">
                    EMAIL ADDRESS: {customer.emailAddress}
                    </div>
              </div>

              <div className="row">
                    <div  className="dashboard">
                    PHONE NUMBER: {customer.phoneNumber}
                    </div>
              </div>

              <div className="row">
                    <div className="dashboard">
                    FAVORITE PLAYER: {customer.favoritePlayerFirstName} {customer.favoritePlayerLastName}

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
      {this.state.editProfile? <EditProfile/> : ''}
      </div>

      </div>
    )}
  </div>
  </div>

    )

}
}

export default Dashboard
