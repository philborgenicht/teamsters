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
  tvEvents:[]
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


    this.setState({allEvents:allEvents, tvEvents:tvEvents})
    console.log(this.state)
  }


clearResults=()=>{
  this.setState({allEvents:[], tvEvents:[]})
}




  render(){
    return(

      <div>

      <button onClick={this.clearResults}>clear</button>
      <form onSubmit={this.searchEvents}>
      <div class="form-group">
              <label for="exampleFormControlSelect1">SELECT A LEAGUE</label>
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

              <select onChange={this.setYear} class="form-control" id="year">
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>

              </select>
              <button type = 'submit'> search </button>
            </div>

      </form>
<div className='row'>

<div className='col-6'>
{this.state.viewAllEvents?
<div>
{this.state.allEvents.map(event=>
<div>









</div>)}
</div>
:''}
</div>

<div className='col-6'>
{this.state.viewTvEvents?
<div>
{this.state.tvEvents.map(event=>
<div>













</div>)}
</div>
:''}
</div>

</div>




  </div>
)
}
}

export default Stats5;
