import React from 'react'


const EditProfile=(props)=>{
  return(
    <div>
          <form>


          <div className="row">
          <label className="editprofile"htmlFor="firstName"> <u>FIRST NAME:</u></label>
          </div>

          <div className='row'>
          <input className="editprofile"id="firstName" type="text" placeholder="first name"/>
          </div>


          <div className="row">
          <label className="editprofile"htmlFor="lastName"> <u>LAST NAME:</u></label>
          </div>

          <div className='row'>
          <input className="editprofile"id="lastName" type="text" placeholder="last name"/>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="userName"> <u>USERNAME:</u></label>
          </div>

          <div className='row'>
          <input className="editprofile"id="userName" type="text" placeholder="username"/>
          </div>



          <div className="row">
          <label className="editprofile"htmlFor="emailAddress"> <u>EMAIL ADDRESS:</u></label>
          </div>

          <div className='row'>
          <input className="editprofile"id="emailAddress" type="text" placeholder="email address"/>
          </div>

          <div className="row">
          <label className="editprofile"htmlFor="phoneNumber"> <u>PHONE NUMBER:</u></label>
          </div>

          <div className='row'>
          <input className="editprofile"id="phoneNumber" type="text" placeholder="phone number"/>
          </div>

          <div className="row">
          <label htmlFor="favAthlete"><u>FAVORITE ATHLETE:</u></label>
          </div>

          <div className='row'>
          <select className="form-control" id="favAthlete">
          {props.athletes.map(athlete=><option >{athlete.name}, {athlete.id}</option>)}
          </select>
          </div>

          <div className="row">
          <label htmlFor="favSport"><u>FAVORITE SPORT:</u>          </label>
          </div>

          <div className='row'>
          <select className="form-control" id="favSport">
          {props.sports.map(sport=><option >{sport.name}, {sport.id}</option>)}
          </select>
          </div>

          <div className="row">
          <label htmlFor="favTeam"><u>FAVORITE TEAM:</u></label>
          </div>

          <div className='row'>
          <select className="form-control" id="favTeam">
          {props.teams.map(team=><option >{team.name}, {team.id}</option>)}
          </select>
          </div>
<br/><br/>


          <div className="row">
          <button className="btn btn-block btn-dark" type="submit" > Submit Changes </button>
          </div>







          </form>
    </div>
  )
}



export default EditProfile
