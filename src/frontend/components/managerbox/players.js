import React, {Component} from 'react';
import * as ROUTES from '../../../constants/routes.js'
import {Link} from 'react-router-dom'

import { AuthUserContext } from '../../../components/Session';
import { withAuthorization } from '../../../components/Session';

class Players extends Component{
state={
  rosters:[],
  customers:[],
  athletes:[],
  user:[]
}

  componentDidMount = async() => {
    const response = await fetch('https://galvanize-borgenicht.herokuapp.com/athletes')
    const athletes = await response.json()

    const response2= await fetch('https://galvanize-borgenicht.herokuapp.com/customers_athletes')
    const customers_athletes= await response2.json()


    const response4 = await fetch('https://galvanize-borgenicht.herokuapp.com/customers')
    const customers = await response4.json()


    this.setState({athletes:athletes, customers:customers, customers_athletes:customers_athletes})
  }

  render(){
    let useremail
    return(

<div className="container">
<div className="row justify-content-center">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {useremail=authUser.email}</p>  )}

  </AuthUserContext.Consumer>
</div>

<div className='row justify-content-center'>

    <Link to={ROUTES.MANAGERBOX}> Manager Box </Link>
</div>

<div className='row justify-content-center'>
<h1> players </h1>
</div>

<div className="row justify-content-center">

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

export default withAuthorization(authCondition)(Players);
