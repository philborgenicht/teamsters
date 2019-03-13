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
  //player  form
  <div className='col-3'>
  <form onSubmit={this.searchPlayers}>
  <input onChange={this.setFirstName}/>
  <input onChange={this.setLastName}/>
  <button type = 'submit'> submit </button>
  </form>
  </div>

  <div className='col-3'>
  </div>

  <div className='col-3'>
  </div>

  <div className='col-3'>
  </div>
</div>
//player results
<div className="row justify-content-center">

</div>

<div className="row justify-content-center">
</div>

<div className="row justify-content-center">
</div>

<div className="row justify-content-center">
</div>


{console.log(this.state.player)}

{this.state.viewPlayer?
<div>
{this.state.player.map(player=>
  <div>
{player.idPlayer}...
{player.idTeam}...
{player.strNationality}
{player.strTeam}
{player.strSport}
{player.dateBorn}
{player.strBirthLocation}
{player.strDescriptionEn}
{player.strGender}
{player.strPosition}
{player.strCollege}
{player.strFacebook}
{player.strWebsite}
{player.strTwitter}
{player.strInstagram }
{player.strInstagram}
{player.strHeight}
{player.strWeight}
{player.strThum}
{player.strCutout}
{player.Fanart1}
{player.Fanart2}
{player.Fanart3}
{player.Fanart4}
</div>

)}
</div>


   :''}
</div>

)}}




export default Stats;
