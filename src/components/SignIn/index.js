import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = (props) => (
  <div className='container'>
  <div className='row'>
    <div className='col-3'>
    </div>
    <div className='col-3'>
    <h1>Log In</h1>
    </div>
  </div>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
  <div className='container'>
      <form onSubmit={this.onSubmit}>
<div className='row'>
<div className='col-3'>
<label htmlFor='email'><u>Email:</u></label>
</div>
<div className='col-3'>
<label htmlFor='password'><u>Password:</u></label>
</div>
<div className='col-3'>
</div>
</div>

<div className='row'>
<div className='col-3'>
        <input
          name="email"
          id="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          id='email'
          required
        />
</div>

<div className='col-3'>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          id='password'
          required
        />
</div>
<div className='col-3'>
        <button className="btn btn-dark" disabled={isInvalid} type="submit">
          Sign In
        </button>
</div>
</div>
        {error && <p>{error.message}</p>}
      </form>
    </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
