import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = (props) => (
<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <h1>Account: {authUser.email}</h1>    )}
  </AuthUserContext.Consumer>


<div className="row">

  <div className="col-9">
        <form onSubmit={props.postUser}>

        <div className="row">
        <label htmlFor="firstname">First Name:
        <input  type='text' placeholder="first name" id='firstname'/>
        </label>
        </div>

        <div className="row">
        <label htmlFor="lastname">Last Name:
        <input type='text' placeholder="last name" id='lastname'/>
        </label>
        </div>

        <div className="row">
        <label htmlFor="username">Username:
        <input type='text' placeholder="username" id='username'/>
        </label>
        </div>

        <div className="row">
        <AuthUserContext.Consumer>
          {authUser => (  <label htmlFor="email">Email Address:<input readOnly type="email" id="email" value={authUser.email} /></label>  )}
        </AuthUserContext.Consumer>
        </div>

        <div className="row">
        <label htmlFor="phone">Phone Number:
        <input type="tel" placeholder="phone number" id='phone' />
        </label>
        </div>
                  <div className="row">
                  <label htmlFor="favAthlete">Favorite Athlete:
                  <select className="form-control" id="favAthlete">
                  {props.athletes.map(athlete=><option >{athlete.name}, {athlete.id}</option>)}
                  </select>
                  </label>
                  </div>

                  <div className="row">
                  <label htmlFor="favTeam">Favorite Team:
                  <select className="form-control" id="favTeam">
                  {props.teams.map(team=> <option id={team.id}>{team.name}, {team.id}</option>)}
                  </select>
                  </label>
                  </div>

                  <div className="row">
                  <label htmlFor="favSport">Favorite Sport:
                  <select className="form-control" id="favSport">
                  {props.sports.map(sport=><option id={sport.id}>{sport.name}, {sport.id}</option>)}
                  </select>
                  </label>
                  </div>
        <div className="row">
        <button type="submit" id="submit"> Complete Profile </button>
        </div>

        </form>
  </div>

<div className='col-3'>
        {props.forgotPassword?
        <div><PasswordForgetForm /> <button onClick={props.remember} > dismiss</button></div>
        : <button onClick={props.forget}> forgot password </button>}

        {props.changePassword?
        <div><PasswordChangeForm /> <button onClick={props.revert}> dismiss</button></div>
        : <button onClick={props.change}> change password </button>}
</div>

</div>
</div>

);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
