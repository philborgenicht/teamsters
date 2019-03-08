import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';

const Navigation = (props) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth search={props.search}/> : <NavigationNonAuth search={props.search} />
      }

    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = (props) => (
  <nav class="navbar navbar-expand-sm navbar-light bg-light">

    <AuthUserContext.Consumer>
    {authUser => (  <h6>Hello: {authUser.email}</h6>    )}
    </AuthUserContext.Consumer>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
<Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li class="nav-item">
        <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li class="nav-item active">
        <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li class="nav-item">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>

        <li class="nav-item">
        <Link to={ROUTES.ATHLETES}>Athletes</Link>
        </li>

        <li class="nav-item">
        <SignOutButton />
        </li>
        <li class="nav-item">
        <Link to={ROUTES.ROSTER}>Roster</Link>
        </li>

        <li class="nav-item">
        <Link to={ROUTES.MYTEAMS}>My Teams</Link>
        </li>

        <li class="nav-item">
        <Link to={ROUTES.MYSPORTS}>My Sports</Link>
        </li>
        <li class="nav-item">
        <Link to={ROUTES.TEAMS}>Teams</Link>
        </li>
        <li class="nav-item">
        <Link to={ROUTES.SPORTS}>Sports</Link>
        </li>
        <li class="nav-item">
<Link to={ROUTES.STATS}>Stats</Link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input  onChange={(e)=>props.search(e)} id="input" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>





);

const NavigationNonAuth = (props) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <AuthUserContext.Consumer>
    {authUser => (  <h6>Hello {authUser.email}</h6>    )}
    </AuthUserContext.Consumer>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
<Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li class="nav-item">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input  onChange={(e)=>props.search(e)} id="input" class="form-control mr-sm-2" type="search"  aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>



);
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Navigation);
