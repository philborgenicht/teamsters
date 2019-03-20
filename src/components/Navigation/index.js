import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';

const Navigation = (props) => (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth search={props.search}/> : <NavigationNonAuth search={props.search} />
      }

    </AuthUserContext.Consumer>
);

const NavigationAuth = (props) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top" >
    <AuthUserContext.Consumer>
    {authUser => (  <h6 className="greeting">Hello: {authUser.email}</h6>    )}
    </AuthUserContext.Consumer>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

        <Link className="nav-link"to={ROUTES.MANAGERBOX}>Manager Box</Link>

        <Link className="nav-link"to={ROUTES.ADMIN}>Admin</Link>


        <Link className="nav-link"to={ROUTES.HOME}>My Info</Link>








        <Link className="nav-link"to={ROUTES.PRACTICE}>Practice Box</Link>



        <Link className='nav-link'to={ROUTES.DESCRIPTION}>Main Page</Link>
        <Link className="nav-link"to={ROUTES.STATS}>Stats</Link>


      </ul>
      <form className="form-inline my-2 my-lg-0">
      <div className='signout'><SignOutButton /></div>
        <input  onChange={(e)=>props.search(e)} id="input" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required/>
      </form>

    </div>

  </nav>





);

const NavigationNonAuth = (props) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div className="row">
    <AuthUserContext.Consumer>
    {authUser => (  <h6>Hello {authUser.email}</h6>    )}
    </AuthUserContext.Consumer>
</div>

<div className="row">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">





        <li class="nav-item active">
        <Link to={ROUTES.LANDING}>Landing</Link>
        </li>


        <li class="nav-item">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>


      </ul>

      <form class="form-inline my-2 my-lg-0">
        <input  onChange={(e)=>props.search(e)} id="input" class="form-control mr-sm-2" type="search"  aria-label="Search" required/>
        <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>


);
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Navigation);
