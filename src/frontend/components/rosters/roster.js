import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Roster extends Component{



  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>
<br/><hr/>

<div className="row justify-content-center">


<div className='col-2'>
  <Link to={ROUTES.PRACTICE}><button className='btn btn-info'>Practice Box</button></Link>
</div>

<div className='col-2'>
  <Link to={ROUTES.MYTEAMS}><button className='btn btn-info'>My Teams</button></Link>
</div>

<div className='col-2'>
  <Link to={ROUTES.MYSPORTS}><button className='btn btn-info'>My Sports</button></Link>
</div>


<div className='col-2'>
  <Link to={ROUTES.ATHLETES}><button className='btn btn-info'>Athletes</button></Link>
</div>

<div className='col-2'>
  <Link to={ROUTES.TEAMS}><button className='btn btn-info'>Teams</button></Link>
</div>


<div className='col-2'>
  <Link to={ROUTES.SPORTS}><button className='btn btn-info'>Sports</button></Link>
</div>


</div>
<hr/>
<div className="row justify-content-center">

<h1>My Athletes</h1>
</div>

<div className="row justify-content-center">
  <div className="col-2 list-group-item-dark column-heading">
  First Name
  </div>

  <div className="col-2 list-group-item-dark column-heading">
  Last Name
  </div>

  <div className="col-2 list-group-item-dark column-heading">
  Team
  </div>

  <div className="col-2 list-group-item-dark column-heading">
  Sport
  </div>

  <div className="col-2 list-group-item-dark column-heading">
  Position
  </div>

  <div className="col-2 list-group-item-dark column-heading">
  </div>








</div>
{this.props.athletes.filter(athlete=>athlete.onTeam===true).filter(athlete=>

                                                            athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                                            athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                          ).map(athlete=>
<div className={athlete.sport==="Basketball"? "row basketballplayer": athlete.sport==="Football"? "row footballplayer": athlete.sport==="Baseball"? "row baseballplayer": athlete.sport==="Hockey"? "row hockeyplayer" :''}>
  <div className="col-2 list-group-item column-info">
  <div>{athlete.name.split(' ')[0]}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{athlete.name.split(' ')[1]}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{athlete.teamName}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{athlete.sport}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div>{athlete.position}</div>
  </div>

  <div className="col-2 list-group-item column-info">
  <div><button className="btn btn-dark" onClick={this.props.trade} id={athlete.id}>Remove Player</button></div>
  </div>






  </div>
)}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Roster);
