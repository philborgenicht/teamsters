import React from 'react'


const EditProfile=(props)=>{
  return(
    <div>
          <form>


          <div className="row">
          <label className="editprofile"htmlFor="firstName"> FIRST NAME:
          <input className="editprofile"id="firstName" type="text" placeholder="first name"/>
          </label>
          </div>


          <div className="row">
          <label className="editprofile"htmlFor="lastName"> LAST NAME:
          <input className="editprofile"id="lastName" type="text" placeholder="last name"/>
          </label>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="userName"> USERNAME:
          <input className="editprofile"id="userName" type="text" placeholder="username"/>
          </label>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="emailAddress"> EMAIL ADDRESS:
          <input className="editprofile"id="emailAddress" type="text" placeholder="email address"/>
          </label>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="phoneNumber"> PHONE NUMBER:
          <input className="editprofile"id="phoneNumber" type="text" placeholder="phone number"/>
          </label>
          </div>

          <div className="row">
          <select className="form-control" id="favAthlete">
          {props.athletes.map(athlete=><option >{athlete.name}, {athlete.id}</option>)}
          </select>
          </div>

          <div className="row">
          <select className="form-control" id="favSport">
          {props.sports.map(sport=><option >{sport.name}, {sport.id}</option>)}
          </select>
          </div>

          <div className="row">
          <select className="form-control" id="favTeam">
          {props.teams.map(team=><option >{team.name}, {team.id}</option>)}
          </select>
          </div>



          <div className="row">
          <label className="editprofile"htmlFor="isActive"> ACCOUNT STATUS:
          <input className="editprofile"id="isActive" type="checkbox" />
          </label>
          </div>


          <div className="row">
          <label className="editprofile"htmlFor="isAdmin"> ACCOUNT PRIVILEGES:
          <input className="editprofile"id="isAdmin" type="checkbox" />
          </label>
          </div>

          <div className="row">
          <button className="btn-lg btn-outline-primary" type="submit" > Submit Changes </button>
          </div>







          </form>
    </div>
  )
}



export default EditProfile
