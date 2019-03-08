import React, {Component} from 'react'

export default class Login extends Component{
  render(){
    return(
      <div className="row justify-content-center">
      <div className="col-12">
      <form onSubmit={this.props.login}>

<div className="form-group">

<div className="row">
<label htmlFor="username">Username
<input  className="form-control"type="text" placeholder="username" id="username"/>
</label>
</div>

<div className="row">
<label htmlFor="password">Password
<input className="form-control" type="password" placeholder="password" id="password"/>
</label>
</div>

<div className="row">
<label htmlFor="confirmPassword">Confirm Password
<input className="form-control" type="confirmPassword" placeholder="confirmPassword" id="confirmPassword"/>
</label>
</div>

<div className="row">
<button className="btn btn-outline-success" type="submit"> Sign In:</button>
</div>

</div>
      </form>
      </div>
      </div>

    )
  }
}
