import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button className="btn btn-outline btn-info" type="button" onClick={firebase.doSignOut}>
    Log Out
  </button>
);

export default withFirebase(SignOutButton);
