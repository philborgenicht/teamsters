import React, {Component} from 'react';

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Roster extends Component{



  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <h1>Account: {useremail=authUser.email}{console.log(useremail)}</h1>  )}

  </AuthUserContext.Consumer>
<div className="row justify-content-center">
  <div className="col-2 list-group-item">
  first name
  </div>

  <div className="col-2 list-group-item">
  last name
  </div>

  <div className="col-2 list-group-item">
  team
  </div>

  <div className="col-2 list-group-item">
  sport
  </div>

  <div className="col-2 list-group-item">
  position
  </div>

  <div className="col-2 list-group-item">
  </div>








</div>
{this.props.athletes.filter(athlete=>athlete.onTeam===true).filter(athlete=>

                                                            athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                            ).map(player=>
  <div className="row justify-content-center">

  <div className="col-2 list-group-item">
  <div>{player.name.split(' ')[0]}</div>
  </div>

  <div className="col-2 list-group-item">
  <div>{player.name.split(' ')[1]}</div>
  </div>

  <div className="col-2 list-group-item">
  <div>{player.teamName}</div>
  </div>

  <div className="col-2 list-group-item">
  <div>{player.sport}</div>
  </div>

  <div className="col-2 list-group-item">
  <div>{player.position}</div>
  </div>

  <div className="col-2 list-group-item">
  <div><button onClick={this.props.trade} id={player.id}>remove from team</button></div>
  </div>






  </div>
)}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Roster);
