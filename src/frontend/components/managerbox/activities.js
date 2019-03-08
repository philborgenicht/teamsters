import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Activities extends Component{



  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>

  <Link to={ROUTES.MANAGERBOX}> Manager Box </Link>

<h1> activities</h1>
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Activities);
