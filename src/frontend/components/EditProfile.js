import React from 'react'


const EditProfile=(props)=>{
  return(
    <div>
    <hr/>
          <form onSubmit={props.editProfile}>


          <div className='row'>
          <label htmlFor='firstname'><u>First Name:</u></label>
          </div>
          <div className='row'>
          <input id='firstname' placeholder='new first name'required/>
          </div>

          <div className='row'>
          <label htmlFor='lastname'><u>Last Name:</u></label>
          </div>
          <div className='row'>
          <input id='lastname' placeholder='new last name'required/>
          </div>



          <div className="row">
          <label htmlFor="favAthlete"><u>Favorite Athlete:</u></label>
          </div>

          <div className='row'>
          <select className="form-control" id="favAthlete">
          {props.athletes.map(athlete=><option >{athlete.name}, {athlete.id}</option>)}
          </select>
          </div>

          <div className="row">
          <label htmlFor="favSport"><u>Favorite Sport:</u>          </label>
          </div>

          <div className='row'>
          <select className="form-control" id="favSport">
          {props.sports.map(sport=><option >{sport.name}, {sport.id}</option>)}
          </select>
          </div>

          <div className="row">
          <label htmlFor="favTeam"><u>Favorite Team:</u></label>
          </div>

          <div className='row'>
          <select className="form-control" id="favTeam">
          {props.teams.map(team=><option >{team.name}, {team.id}</option>)}
          </select>
          </div>
<br/><br/>
<hr/>

          <div className="row">
          <button className="btn btn-block btn-dark" type="submit" > Submit Changes </button>
          </div>
          </form>
          <br/><hr/>
          <form>
          <button className='btn btn-block btn-dark'>Confirm Changes</button>
          </form>
    </div>
  )
}



export default EditProfile
