import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats5 extends Component{
state={
  month:'',
  day:'',
  year:'',
  basketballTeams:[],
  footballTeams:[],
  baseballTeams:[],
  hockeyTeams:[],
  allEvents:[],
  tvEvents:[],
  viewAllEvents:false,
  viewTvEvents:false
}
// componentDidMount = async() => {
//   const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba')
//   const basketball= await response.json()
//   const basketballTeams =  basketball.teams
//
//   const response2 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=mlb')
//     const baseball= await response2.json()
//   const baseballTeams =  baseball.teams
//
//   const response3 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nfl')
//     const football= await response3.json()
//   const footballTeams =  football.teams
//
//   const response4 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nhl')
//     const hockey= await response4.json()
//   const hockeyTeams =  hockey.teams
//
//
//   this.setState({
//     basketballTeams:basketballTeams,
//     baseballTeams:baseballTeams,
//     footballTeams:footballTeams,
//     hockeyTeams:hockeyTeams
//   })
// }
//search all teams by league
  searchEvents=async(e)=>{
    e.preventDefault()
    let day=e.target.day.value
    let month=e.target.month.value.split(' ')[1]
    let year=e.target.year.value
    console.log(`${year}-${month}-${day}`)
    this.setState({
      day:day,
      month:month,
      year:year
    })
    const allResults = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=${year}-${month}-${day}`)
    const allData= await allResults.json()
    const allEvents=allData.events

    const tvResults = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventstv.php?d=${year}-${month}-${day}`)
    const tvData = await tvResults.json()
    const tvEvents=tvData.tvevents


    this.setState({allEvents:allEvents, tvEvents:tvEvents, viewAllEvents:true, viewTvEvents:true})
    console.log(this.state)
  }


clearResults=()=>{
  this.setState({allEvents:[], tvEvents:[]})
}

sortBySport=()=>{
  let currentEvents=this.state.allEvents
  let currentTvEvents=this.state.tvEvents
  let newEvents=currentEvents.sort((event1, event2)=>{
    if (event1.strSport<event2.strSport){
      return -1
    }
    if (event1.strSport>event2.strSport){
      return 1
    }
    if (event1.strSport===event2.strSport){
      return 0
    }
  })
  let newTvEvents=currentTvEvents.sort((event1, event2)=>{
    if (event1.strSport<event2.strSport){
      return -1
    }
    if (event1.strSport>event2.strSport){
      return 1
    }
    if (event1.strSport===event2.strSport){
      return 0
    }
  })
  this.setState({allEvents:newEvents, tvEvents:newTvEvents})
}
sortByDate=()=>{
  let currentEvents=this.state.allEvents
  let currentTvEvents=this.state.tvEvents
  let newEvents=currentEvents.sort((event1, event2)=>{
    if (event1.dateEvent<event2.dateEvent){
      return -1
    }
    if (event1.dateEvent>event2.dateEvent){
      return 1
    }
    if (event1.dateEvent===event2.dateEvent){
      return 0
    }
  })
  let newTvEvents=currentTvEvents.sort((event1, event2)=>{
    if (event1.dateEvent<event2.dateEvent){
      return -1
    }
    if (event1.dateEvent>event2.dateEvent){
      return 1
    }
    if (event1.dateEvent===event2.dateEvent){
      return 0
    }
  })
  this.setState({allEvents:newEvents, tvEvents:newTvEvents})
}

  render(){
    return(

      <div className='container'>
      <div className='row'>

      <div className='col-3'>
      <button className='btn btn-sm btn-info'>
      <Link className="nav-link"to={ROUTES.STATS}>Stats1</Link>
      </button>
      </div>

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

      </div>
      <hr/>
<hr/>
      <button  className='btn btn-block btn-dark' onClick={this.clearResults}>clear</button>
      <form onSubmit={this.searchEvents}>
      <div class="form-group">
              <select onChange={this.setYear} class="form-control" id="year">

              <option>2018</option>
                <option>2019</option>


              </select>

              <select onChange={this.setMonth} class="form-control" id="month">
                <option>January 01</option>
                <option>February 02</option>
                <option>March 03</option>
                <option>April 04</option>
                <option>May 05</option>
                <option>June 06</option>
                <option>July 07</option>
                <option>August 08</option>
                <option>September 09</option>
                <option>October 10</option>
                <option>November 11</option>
                <option>December 12</option>
              </select>

              <select onChange={this.setDay} class="form-control" id="day">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>


              </select>


              <button className='btn btn-block btn-dark'type = 'submit'> search </button>
            </div>

      </form>
      <div className='row'>
      <button onClick={this.sortBySport}>sort by sport</button>
      <button onClick={this.sortByDate}>sort by date</button>
      </div>

{this.state.viewAllEvents?
  <div>
  {this.state.allEvents.filter(game=>

    game.strSport.toLowerCase().includes(this.props.filterString.toLowerCase())||
    game.strLeague.toLowerCase().includes(this.props.filterString.toLowerCase())||
    game.strHomeTeam.toLowerCase().includes(this.props.filterString.toLowerCase())||
    game.strAwayTeam.toLowerCase().includes(this.props.filterString.toLowerCase()))



    .map(game=>
    <div>
  <div className='row'>

<div className='col-2 list-group-item'>
{game.idEvent}
</div>

<div className='col-2 list-group-item'>
{game.strEvent}
</div>



<div className='col-2 list-group-item'>
{game.strSport}
</div>

<div className='col-2 list-group-item'>
{game.idLeague}
</div>

<div className='col-2 list-group-item'>
{game.strLeague}
</div>

<div className='col-2 list-group-item'>
{game.strSeason}
</div>

<div className='col-2 list-group-item'>
{game.strHomeTeam}
</div>

<div className='col-2 list-group-item'>
{game.strAwayTeam}
</div>

<div className='col-2 list-group-item'>
{game.dateEvent}
</div>

<div className='col-2 list-group-item'>
{game.strTime}
</div>



</div>
<hr/>

  </div>
)}
  </div>
  :''}



{this.state.viewTvEvents?
  <div>
  {this.state.tvEvents.filter(game=>
    game.strSport.toLowerCase().includes(this.props.filterString.toLowerCase())||
    game.strCountry.toLowerCase().includes(this.props.filterString.toLowerCase()))


    .map(game=>
    <div>
<div className='row'>

<div className='col-2 list-group-item'>
{game.idEvent}
</div>
<div className='col-2 list-group-item'>
{game.strSport}
</div>

<div className='col-2 list-group-item'>
{game.strEvent}
</div>

<div className='col-2 list-group-item'>
{game.idChannel}
</div>

<div className='col-2 list-group-item'>
{game.strCountry}
</div>

<div className='col-2 list-group-item'>
{game.strLogo}
</div>

<div className='col-2 list-group-item'>
{game.strChannel}
</div>

<div className='col-2 list-group-item'>
{game.strSeason}
</div>

<div className='col-2 list-group-item'>
{game.strTime}
</div>

<div className='col-2 list-group-item'>
{game.dateEvent}
</div>


</div>
<hr/>
</div>

  )}
  </div>
  :''}
  </div>
)
}
}
export default Stats5;
