import React from 'react'

const Toolbar=(props)=>{

    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" >Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        {props.loggedIn?
                        <div>
                        <button onClick={props.logout} class="btn-primary" > Logout <span class="sr-only">(current)</span>
                        </button>
                        </div>
                      :
                        <div>
                        <button onClick={props.login} class="btn-primary" > Login <span class="sr-only">(current)</span>
                        </button>
                        </div>
        }
      </li>

      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Navigation
</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <button onClick={props.viewSports} class="dropdown-item" >Sports</button>
          <button onClick={props.viewTeams} class="dropdown-item" >Teams</button>
          <button onClick={props.viewAthletes} class="dropdown-item" >Athletes</button>
          <div class="dropdown-divider"></div>
          <button onClick={props.viewDashboard} class="dropdown-item" >Account Dashboard</button>
        </div>
      </li>
      <li class="nav-item">
        <button onClick={props.showLogin}>Login</button>
        <button onClick={props.showSignup}>Signup</button>
        <a class="nav-link" href="http://www.espn.com">ESPN.COM</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )

}

export default Toolbar
