import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats2 extends Component{
state={
  league:'',
  teams:null,
  viewTeams:false
}

//search all teams by league
  searchTeams=async(e)=>{
    e.preventDefault()
    let league=e.target.league.value
    this.setState({league:league})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`)
    const data= await results.json()
console.log(data)
console.log(league)
const teams=data.teams
this.setState({teams:teams})
console.log(this.state.teams)
this.setState({viewTeams:true})

  }



//




  render(){
    return(

      <div className='container'>
      <div className='row'>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS2}>Stats2</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS3}>Stats3</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS4}>Stats4</Link>
      </button>
      </div>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS4}>Stats5</Link>
      </button>
      </div>

      </div>
      <hr/>
      <form onSubmit={this.searchTeams}>
      <div class="form-group">
              <label for="exampleFormControlSelect1"><u>Select a League</u></label>
              <select onChange={this.setLeague} class="form-control" id="league">
                <option>MLB</option>
                <option>NBA</option>
                <option>NFL</option>
                <option>NHL</option>

              </select>
              <hr/>
              <br/>
              <button className='btn btn-block btn-info'type = 'submit'> search </button>
            </div>

      </form>




      {this.state.viewTeams?
        <div>



{this.state.teams.map(team=>
<div>

<div className='row justify-content-center'>


<div className='col-4 list-group-item'>

<u>Team Name</u>

{team.strTeam}
</div>

<div className='col-4 list-group-item'>
<u>Team Id#:</u>
{team.idTeam}
</div>



<div className='col-4 list-group-item'>
<u>Year Formed:</u>

{team.intFormedYear}
</div>





<div className='col-4 list-group-item'>
<u>Country:</u>

{team.strCountry}
</div>



















<div className='col-4 list-group-item'>
<u>League:</u>

{team.strLeague}
</div>






</div>



<div className='row list-group-item'>
<u>Website:</u>{team.strRSS}
</div>




<div className='row list-group-item'>
{team.strDescriptionEN}
</div>






<div className='row list-group-item'>
<u>Stadium:</u>{team.strStadium}
</div>
<div className='row list-group-item'>
<u>Stadium Website</u>{team.strStadiumThumb}
</div>

<div className='row list-group-item'>

<div className='col-6 list-group-item'>
<u>Location:</u>

{team.strStadiumLocation}

</div>

<div className='col-6 list-group-item'>
<u>Capacity:</u>

{team.intStadiumCapacity}
</div>

</div>

<div className='row list-group-item'>
{team.strStadiumDescription}
</div>


<div className='row list-group-item'>
<u>Team Badge:</u>
{team.strTeamBadge}
</div>

<div className='row list-group-item'>
<u>Jersey:</u>
{team.strTeamJersey}
</div>

<div className='row list-group-item'>
<u>Logo:</u>
{team.strTeamLogo}
</div>

<div className='row list-group-item'>
<u>Banner:</u>
{team.strTeamBanner}
</div>



<div className='row list-group-item'>
<u>Website: </u>{team.strWebsite}
</div>
<div className='row list-group-item'>
<u>Facebook: </u>{team.strFacebook}
</div>
<div className='row list-group-item'>
<u>Twitter: </u>{team.strTwitter}
</div>
<div className='row list-group-item'>
<u>Instagram: </u>{team.strInstagram}
</div>

<div className='row list-group-item'>
<u>Fanart: </u>{team.strTeamFanart1}
</div>
<div className='row list-group-item'>
<u>Fanart: </u>{team.strTeamFanart2}
</div>
<div className='row list-group-item'>
<u>Fanart: </u>{team.strTeamFanart3}
</div>
<div className='row list-group-item'>
<u>Fanart: </u>{team.strTeamFanart4}
</div>
<br/><br/>
</div>



















)}


        </div> :''}






  </div>
)
}
}

export default Stats2;
