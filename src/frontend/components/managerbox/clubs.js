import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Clubs extends Component{

  state={
    customers_teams:[],
    customers:[],
    teams:[],
    user:[]
  }

    componentDidMount = async() => {
      const response = await fetch('https://galvanize-borgenicht.herokuapp.com/customers_teams')
      const customers_teams = await response.json()

      const response2 = await fetch('https://galvanize-borgenicht.herokuapp.com/teams')
      const teams = await response2.json()


      const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
      const customers = await response4.json()


      this.setState({customers_teams:customers_teams, customers:customers, teams:teams})
    }

  render(){
    let useremail
    return(

<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>

    <Link to={ROUTES.MANAGERBOX}> Manager Box </Link>
<h1> clubs </h1>
<div className="row">

<div className="col-2">
Team
</div>

<div className="col-2">
City
</div>

<div className="col-2">
State
</div>

<div className="col-2">
Sport
</div>

<div className="col-2">
<button className="btn btn-outline-success">ditch 'em'</button>
</div>


</div>
</div>

)
}

}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Clubs);
