import React from 'react'

const Footer=(props)=>{

    return(

      <footer className="sticky-bottom fixed-bottom">

          <div className="container-fluid text-center text-md-left">

            <div className="row">

              <div className="col-md-6 mt-md-0 mt-3">

                <h5 className="text-uppercase">Teamsters</h5>
                <p>Thank you for visiting and becoming a part of the Teamsters team</p>

              </div>

              <hr className="clearfix w-100 d-md-none pb-3"></hr>

              <div className="col-md-3 mb-md-0 mb-3">

                  <h5 className="text-uppercase">About Us</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="https://www.linkedin.com/in/phillipborgenicht/" target='blank'>The Developer</a>
                    </li>
                    <li>
                      <a href="https://www.galvanize.com" target='blank'>The School</a>
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                  </ul>

                </div>

                <div className="col-md-3 mb-md-0 mb-3">

                  <h5 className="text-uppercase">Sports Resources</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="https://www.espn.com" target='blank'>ESPN</a>
                    </li>
                    <li>
                      <a href="https://www.mlb.com/yankees" target='blank'>NEW YORK YANKEES</a>
                    </li>
                    <li>
                      <a href="https://www.nba.com/lakers" target='blank'>LOS ANGELES LAKERS</a>
                    </li>
                    <li>
                      <a href="https://www.nhl.com/rangers" target='blank'>NEW YORK RANGERS</a>
                    </li>
                  </ul>

                </div>
            </div>
          </div>          <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https://www.galvanize.com" target='blank'> Galvanize Institute</a>
          </div>
        </footer>

    )

}

export default Footer
