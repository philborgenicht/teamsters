

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = (props) => (
  <div className='container'>
  <div className='row justify-content-center'>
    <div className='col-6'>
    <h1>SignUp</h1>
    </div>

  </div>
  <div className='row justify-content-center'>
    <SignUpForm />
  </div>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.LANDING);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

      fetch('http://localhost:8000/customers',{
        method: 'POST',
        body: JSON.stringify({
          username: username,
          email: email
        }),
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
<div className='container'>
      <form onSubmit={this.onSubmit}>
<div className='row'>

<div className='col-3'>
<label htmlFor='fullName'><u>Full Name:</u></label>
</div>

<div className='col-3'>
<label htmlFor='email'><u>Email Address:</u></label>
</div>

<div className='col-3'>
<label htmlFor='password'><u>Password:</u></label>
</div>

<div className='col-3'>
<label htmlFor='passwordconfirm'><u>Confirm Password:</u></label>
</div>



</div>

<div className='row'>



<div className='col-3'>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          id='fullName'
          required
        />
</div>


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
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          id='password'
          required
        />
</div>


<div className='col-3'>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          id='passwordconfirm'
          required
        />
</div>


</div>
<br/><br/>
<div className='row justify-content-center'>

        <button className="btn btn-block btn-dark"disabled={isInvalid} type="submit">
          Sign Up
        </button>





</div>
        {error && <p>{error.message}</p>}
      </form>
</div>
    );
  }
}

const SignUpLink = () => (
<div className='container'>
<div calssName='row'>
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}><button className='btn btn-primary'>Sign Up</button></Link>
  </p>
</div>
</div>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };
