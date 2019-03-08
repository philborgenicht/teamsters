import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../components/Session';
import { withAuthorization } from '../../components/Session';

class Main extends Component{



  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <h1>Account: {useremail=authUser.email}</h1>  )}

  </AuthUserContext.Consumer>

  <Link to={ROUTES.TEAMS}>Teams</Link>
  <Link to={ROUTES.ATHLETES}>Athletes</Link>
  <Link to={ROUTES.SPORTS}>Sports</Link>

</div>


)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Main);
