import React, {Component} from 'react';

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class MySports extends Component{



  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <h1>Account: {useremail=authUser.email}{console.log(useremail)}</h1>  )}

  </AuthUserContext.Consumer>
<h1> my sports </h1>
<div className="row">
    <div className="col-12 list-group-item">Sports</div>
</div>

{this.props.sports.filter(sport=>sport.onList===true).filter(sport=>
                                                              sport.name.toLowerCase().includes(this.props.filterString.toLowerCase())
                                                            ).map(sport=>(
  <div>
  {sport.name}
  <button onClick={this.props.removeSport} id={sport.id}>remove team</button>
  </div>
))}
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(MySports);
