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
          <label className="editprofile"htmlFor="favoritePlayerFirstName"> FAVORITE PLAYER FIRST NAME:
          <input className="editprofile"id="favoritePlayerFirstName" type="text" placeholder="favorite player first name"/>
          </label>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="favoritePlayerLastName"> FAVORITE PLAYER LAST NAME:
          <input className="editprofile"id="favoritePlayerLastName" type="text" placeholder="favorite player last name"/>
          </label>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="team"> FAVORITE TEAM:
          <input className="editprofile"id="team" type="text" placeholder="favorite team"/>
          </label>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="sport"> FAVORITE SPORT:
          <input className="editprofile"id="sport" type="text" placeholder="favorite sport"/>
          </label>
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
