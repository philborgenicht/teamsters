import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats5 extends Component{
state={
  month:'',
  day:'',
  year:''
}
componentDidMount = async() => {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba')
  const basketball= await response.json()
  const basketballTeams =  basketball.teams

  const response2 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=mlb')
    const baseball= await response2.json()
  const baseballTeams =  baseball.teams

  const response3 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nfl')
    const football= await response3.json()
  const footballTeams =  football.teams

  const response4 = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nhl')
    const hockey= await response4.json()
  const hockeyTeams =  hockey.teams


  this.setState({
    basketballTeams:basketballTeams,
    baseballTeams:baseballTeams,
    footballTeams:footballTeams,
    hockeyTeams:hockeyTeams
  })
}
//search all teams by league
  searchTeams=async(e)=>{
    e.preventDefault()
    let league=e.target.league.value
    this.setState({league:league})
    const results = await fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`)
    const data= await results.json()


  }



//
// Events on a specific day
// https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=2014-10-10
// https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=2014-10-10&s=Soccer
// https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=2014-10-10&l=Australian_A-League
//
// TV Events on a specific day
// https://www.thesportsdb.com/api/v1/json/1/eventstv.php?d=2018-07-07
// https://www.thesportsdb.com/api/v1/json/1/eventstv.php?d=2018-07-07&s=Fighting



  render(){
    return(

      <div>
      <form onSubmit={this.searchTeams}>
      <div class="form-group">
              <label for="exampleFormControlSelect1">SELECT A LEAGUE</label>
              <select onChange={this.setLeague} class="form-control" id="league">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
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

              <select onChange={this.setLeague} class="form-control" id="league">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>

              </select>

              <select onChange={this.setLeague} class="form-control" id="league">
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







  </div>
)
}
}

export default Stats5;
