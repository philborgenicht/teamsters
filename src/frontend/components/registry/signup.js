import React, {Component} from 'react'

export default class Signup extends Component{
  render(){
    return(
      <div className="row justify-content-center">
      <div className="col-12">

      <form onSubmit={this.props.signup}>
      <div className="form-group">



      <div className="row">
      <label htmlFor="firstName">First Name
      <input className="form-control" type="text" placeholder="first name" id="firstName" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="lastName">Last Name
      <input className="form-control" type="text" placeholder="last name" id="lastName" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="userName">Username
      <input className="form-control" type="text" placeholder="username" id="userName" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="email">Email Address
      <input className="form-control" type="text" placeholder="email address" id="email" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="phone">Phone Number
      <input className="form-control" type="tel" placeholder="telephone number" id="phone" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="favoritePlayerFirstName">Favorite Player First Name
      <input className="form-control" type="text" placeholder="favorite athlete first name" id="favoritePlayerFirstName" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="favoritePlayerLastName">Favorite Player Last Name
      <input className="form-control" type="text" placeholder="favorite athlete last name" id="favoritePlayerLastName" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="favoriteTeam">Favorite Team
      <input className="form-control" type="text" placeholder="favorite team" id="favoriteTeam" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="favoriteSport">Favorite Sport
      <input className="form-control" type="text" placeholder="favorite sport" id="favoriteSport" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="password">Password
      <input className="form-control" type="text" placeholder="password" id="password" />
      </label>
      </div>

      <div className="row">
      <label htmlFor="confirmPassword">Confirm Password
      <input className="form-control" type="text" placeholder="confirm password" id="confirmPassword" />
      </label>
      </div>

      <div className="row">
      <button type="submit" className="btn btn-outline-success"> Signup: </button>
      </div>



      </div>

      </form>
      </div>
      </div>
    )
  }
}
