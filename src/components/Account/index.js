import React from 'react';
import {Link} from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = (props) => (
<div className="container">
  <AuthUserContext.Consumer>
    {authUser => (  <p>Account: {authUser.email}</p>    )}
  </AuthUserContext.Consumer>


<div className="row">

  <div className="col-9">
        <form onSubmit={props.postUser}>

        <div className="row">
        <label htmlFor="firstname"><u>First Name:</u></label>
        </div>

        <div className='row'>
        <input  type='text' placeholder="first name" id='firstname' required/>
        </div>

        <div className="row">
        <label htmlFor="lastname"><u>Last Name:</u></label>
        </div>

        <div className='row'>
        <input type='text' placeholder="last name" id='lastname' required/>
        </div>

        <div className="row">
        <label htmlFor="username"><u>Username:</u></label>
        </div>

        <div className='row'>
        <input type='text' placeholder="username" id='username' required/>
        </div>

        <div className="row">
        <label htmlFor="email"><u>Email Address:</u></label>
        </div>

        <div className='row'>
        <AuthUserContext.Consumer>
          {authUser => (  <input readOnly type="email" id="email" value={authUser.email} />  )}
        </AuthUserContext.Consumer>
        </div>

        <div className="row">
        <label htmlFor="phone"><u>Phone Number:</u></label>
        </div>

        <div className='row'>
        <input type="tel" placeholder="phone number" id='phone'  required/>
        </div>

                  <div className="row">
                  <label htmlFor="favAthlete"><u>Favorite Athlete:</u></label>
                  </div>

                  <div className='row'>
                  <select className="form-control" id="favAthlete">
                  {props.athletes.map(athlete=><option >{athlete.name}, {athlete.id}</option>)}
                  </select>
                  </div>

                  <div className="row">
                  <label htmlFor="favTeam"><u>Favorite Team:</u></label>
                  </div>

                  <div className='row'>
                  <select className="form-control" id="favTeam">
                  {props.teams.map(team=> <option id={team.id}>{team.name}, {team.id}</option>)}
                  </select>
                  </div>

                  <div className="row">
                  <label htmlFor="favSport"><u>Favorite Sport:</u></label>
                  </div>

                  <div className='row'>
                  <select className="form-control" id="favSport">
                  {props.sports.map(sport=><option id={sport.id}>{sport.name}, {sport.id}</option>)}
                  </select>
                  </div>
                  <br/><br/>
        <div className="row">
              <button className="btn btn-info btn-block" type="submit" id="submit"> Complete Profile </button>
        </div>
        <br/><br/>
        <div className="row">
        <Link to={ROUTES.PRACTICE}><button className="btn btn-primary btn-block"> GO PLAY </button></Link>

        </div>

        </form>
  </div>

<div className='col-3'>
        {props.forgotPassword?
        <div><PasswordForgetForm /> <button className='btn btn-block btn-warning'onClick={props.remember} > dismiss</button><br/><br/></div>
        : <div><button className='btn btn-dark btn-block' onClick={props.forget}> forgot password </button><br/><br/></div>}

        {props.changePassword?
        <div><PasswordChangeForm /> <button className='btn btn-block btn-warning'onClick={props.revert}> dismiss</button><br/><br/></div>
        : <button className="btn btn-info btn-block" onClick={props.change}> change password </button>}
</div>

</div>
</div>

);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
