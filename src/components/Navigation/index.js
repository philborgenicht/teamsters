import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-brand" >Navbar</button>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li className="nav-item active">
        <SignOutButton />
      </li>
      <li className="nav-item">
        <Link to={ROUTES.ROSTER}>Roster</Link>
      </li>

      <li className="nav-item">
        <Link to={ROUTES.TEAMS}>Teams</Link>
      </li>

      <li className="nav-item">
        <Link to={ROUTES.ATHLETES}>Athletes</Link>
      </li>

      <li className="nav-item">
        <Link to={ROUTES.SPORTS}>Sports</Link>
      </li>

      <li className="nav-item">
        <Link to={ROUTES.STATS}>Stats</Link>
      </li>




    </ul>

  </div>
</nav>

</div>
);

const NavigationNonAuth = () => (
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-brand" >Navbar</button>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>


    </ul>

  </div>
</nav>
</div>
);

export default Navigation;
