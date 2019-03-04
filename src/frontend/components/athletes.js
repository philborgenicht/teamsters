import React, {Component} from 'react'

class Athletes extends Component{

  state={
    athletes:[...this.props.athletes]
  }

  submit=(e)=>{
    e.preventDefault()
    console.log(e.target.id)
  }


  render(){
    return(
      <div className="container ">
      <div className="row justify-content-center">
        <h1 className="heading"> ATHLETES: </h1>
      </div>

            <div className="row justify-content-center">

                        <div className="col-2 list-group-item-dark athlete-heading">
                        First Name
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Last Name
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Sport
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Team
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Position
                        </div>

                        <div className="col-2 list-group-item-dark">
                        </div>

            </div>



                        {this.props.athletes.map(athlete=>
                          <div className="row justify-content-center">
                          <div className="col-2 list-group-item athleteinfo">{athlete.name.split(' ')[0]}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.name.split(' ')[1]}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.sport}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.teamName}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.position}</div>
                          <div className="col-2 list-group-item athleteinfo"><button className="btn-lg btn-success" onClick={this.props.addToRoster}> Add to My Team </button></div>
                          </div>
                                            )}











</div>

    )
  }
}

export default Athletes
