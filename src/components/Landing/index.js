import React from 'react';
import Base from '../../frontend/App.js'
import Footer from '../../frontend/components/footer.js'
const Landing = (props) => (
  <div>
    <Base userEmail={props.userEmail}/>
    <Footer />
  </div>
);

export default Landing;
