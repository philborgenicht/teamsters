import React, {Component} from 'react'
import axios from 'axios';
export default class Roster extends Component{

state={
  players:[
    {firstName:'Lebron', lastName:'James', sport:'Basketball', teamName:'Los Angeles Lakers', position: 'Forward'},
    {firstName:'Von', lastName:'Miller', sport:'football', teamName:'Denver Broncos', position: 'Linebacker'},
    {firstName:'Henrik', lastName:'Lundqvist', sport:'Hockey', teamName:'New York Rangers', position: 'Goaltender'},
    {firstName:'Nolan', lastName:'Arenado', sport:'Baseball', teamName:'Colorado Rockies', position: 'Third Base'}


  ]
}

componentDidMount() {
  axios.get("https://desolate-eyrie-95298.herokuapp.com/athletes")
    .then(res => {
      const persons = res.data;
      this.setState({ chicken:persons });
    })
}


  render(){

    return(
<div>
{console.log(this.props.athletes)}
{console.log("chicken", this.state.chicken)}

      <div className="row">
      <h1>ROSTER</h1>
      </div>

      <div className="row justify-content-center">

            <div className="col-2 list-group-item roster-heading">
            PLAYER
            </div>

            <div className="col-2 list-group-item roster-heading">
            TEAM
            </div>

            <div className="col-2 list-group-item roster-heading">
            SPORT
            </div>

            <div className="col-2 list-group-item roster-heading">
            POSITION
            </div>
            <div className="col-2 list-group-item">
            </div>
      </div>


{this.state.players.map(player=>
      <div className="row justify-content-center">
            <div className="col-2 list-group-item roster-info">
            {player.firstName} {player.lastName}
            </div>

            <div className="col-2 list-group-item roster-info">
            {player.teamName}
            </div>

            <div className="col-2 list-group-item roster-info">
            {player.sport}
            </div>

            <div className="col-2 list-group-item roster-info">
            {player.position}
            </div>
            <div className="col-2 list-group-item">
            <button onClick={console.log('deleted')} className="btn-lg btn-outline-primary"> remove from team</button>
            </div>
  </div>
)}


</div>


    )
  }
}
