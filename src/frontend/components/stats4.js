import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Stats4 extends Component{
state={

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
// //Next 5 Events by Team Id
// https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602
//
// Next 15 Events by League Id
// https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328




  render(){
    return(

      <div>
      <form onSubmit={this.searchTeams}>
      <div class="form-group">
              <label for="exampleFormControlSelect1">SELECT A LEAGUE</label>
              <select onChange={this.setLeague} class="form-control" id="league">
                <option>MLB</option>
                <option>NBA</option>
                <option>NFL</option>
                <option>NHL</option>

              </select>
              <button type = 'submit'> search </button>
            </div>

      </form>








  </div>
)
}
}

export default Stats4;
