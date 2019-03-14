import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'


class Stats extends Component{

state={
  firstname:'',
  lastname:'',
  player:null,
  viewPlayer:false
}

setFirstName=(e)=>{
  this.setState({firstname:e.target.value})
}
setLastName=(e)=>{
  this.setState({lastname:e.target.value})
}

searchPlayers=async(e)=>{
  e.preventDefault()
  let firstname=this.state.firstname
  let lastname=this.state.lastname
  const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${firstname}%20${lastname}`)
  const chicken= await results.json()
  const player=chicken.player
  console.log(chicken.player)
  this.setState({player:player})
  this.setState({viewPlayer:true})
  e.target.firstname.value=''
  e.target.lastname.value=''
}
reset=()=>{
  document.getElementById('firstname').value=''
  document.getElementById('lastname').value=''
}

//lookup all players by teamid
//https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=

//lookup events by teamId
//https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602

//lookup events by leagueid
//https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328

//playerformer teams by player id
//https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php?id=34147178

//playerhonours by id
//

// League Details by Id
// https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4346
//
// Team Details by Id
// https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604
//
// Player Details by Id
// https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34145937
//
// Event Details by Id
// https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=441613
//
// Player Honours by Player Id
// https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php?id=34147178
//
// Player Former Teams by Player Id
// https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php?id=34147178
//
// Player Contracts by Player Id
// https://www.thesportsdb.com/api/v1/json/1/lookupcontracts.php?id=34147178
//
// Event TV by Event Id
// https://www.thesportsdb.com/api/v1/json/1/lookuptv.php?id=584911
  render(){
    return(

<div className="container">

                <div className='row justify-content-center'>
                <p>stats are awesome</p>
                </div>
          <div className='row justify-content-center'>

                <div className='col-6'>
                <form onSubmit={this.searchPlayers}>
                <div className='row'>
                <div className='col-6'>
                <label htmlFor='firstname'>First Name</label>
                </div>
                <div className='col-6'>
                <label htmlFor='lastname'>Last Name</label>
                </div>
                </div>
                <div className='row'>
                <div className='col-6'>
                <input id="firstname"placeholder="player first name" onChange={this.setFirstName} required/>
                </div>
                <div className='col-6'>
                <input id='lastname'placeholder="player last name" onChange={this.setLastName} required/>
                </div>
                </div>
                <br/><br/>
                <div className='row'>
                <button className='btn btn-block btn-dark'type = 'submit'> submit </button>
                </div>
                <br/><br/>
                <div className='row'>
                <button className='btn btn-block btn-dark' onClick={this.reset}>clear</button>
                </div>
                </form>
                </div>

                <div className='col-3'>

                </div>

                <div className='col-3'>
                </div>

                <div className='col-3'>
                </div>
         </div>
{this.state.viewPlayer?

<div>

{this.state.player.map(player=>
<div>
<div className='row'>

<div className='col-2'>
<div className='row list-group-item'>
<u>Name:</u>
</div>
<div className='row list-group-item'>
{player.strPlayer}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>Nationality:</u>
</div>
<div className='row list-group-item'>{player.strNationality}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>Player Id#:</u>
</div>
<div className='row list-group-item'>
{player.idPlayer}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>Team Id#:</u>
</div>
<div className='row list-group-item'>{player.idTeam}
</div>
</div>


<div className='col-2'>
<div className='row list-group-item'>
<u>Team:</u>
</div>
<div className='row list-group-item'>
{player.strTeam}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>

<u>Sport:</u>
</div>
<div className='row list-group-item'>
{player.strSport}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>Date of Birth:</u>
</div>
<div className='row list-group-item'>{player.dateBorn}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>City of Birth:</u>
</div>
<div className='row list-group-item'>{player.strBirthLocation}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>Height:</u>
</div>
<div className='row list-group-item'>{player.strHeight}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>Weight:</u>
</div>
<div className='row list-group-item'>{player.strWeight}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>Gender:</u>
</div>
<div className='row list-group-item'>
{player.strGender}
</div>
</div>

<div className='col-2'>

<div className='row list-group-item'>
<u>Position:</u>
</div>
<div className='row list-group-item'>
{player.strPosition}
</div>
</div>

<div className='col-2'>
<div className='row list-group-item'>
<u>College Attended:</u>
</div>
<div className='row list-group-item'>{player.strCollege}
</div>
</div>

</div>
<br/><br/>

<div className='row list-group-item'>
<u>Biography:</u> {player.strDescriptionEN}
</div>
<div className='row list-group-item'>
<br/><br/>
<div className='col-4'>
<div className='row list-group-item'>
<u>Social Media:</u>
</div>
<div className='row list-group-item'>
<a href="{player.strFacebook}" alt="link">{player.strFacebook}</a>
</div>
<div className='row list-group-item'>
<a href='{player.strWebsite}' alt="link">{player.strWebsite}</a>
</div>
<div className='row list-group-item'>
<a href='{player.strTwitter}' alt="link">{player.strTwitter}</a>
</div>
<div className='row list-group-item'>
<a target="blank" href={player.strInstagram} alt="link">{player.strInstagram}</a>
</div>
</div>

<div className='col-8'>
<div className='row list-group-item'>
<u>Images:</u>
</div>
<div className='row list-group-item'>
<a href="{player.strThumb}">{player.strThumb}</a>
</div>

<div className='row list-group-item'>
<a href="{player.strCutout}">{player.strCutout}</a>
</div>

<div className='row list-group-item'>
<a href="{player.strFanart1}">{player.strFanart1}</a>
</div>

<div className='row list-group-item'>
<a href="{player.strFanart2}">{player.strFanart2}</a>
</div>

<div className='row list-group-item'>
<a href="{player.strFanart3}">{player.strFanart3}</a>
</div>
<div className='row list-group-item'>
<a href="{player.strFanart4}">{player.strFanart4}</a>
</div>
</div>

</div>

</div>
)}
</div>
  :''}


</div>)}}

export default Stats;
