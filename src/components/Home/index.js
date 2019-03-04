import React from 'react';


import { withAuthorization } from '../Session';
import CompleteAccount from '../../frontend/components/completeAccount.js'
const HomePage = (props) => (

  <div>
    <h1>Home Page</h1>

    <p>The Home Page is accessible by every signed in user.</p>
    <CompleteAccount />
  </div>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
