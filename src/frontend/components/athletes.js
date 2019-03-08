import React, {Component} from 'react'

class Athletes extends Component{



  render(){
    return(
      <div className="container ">
      <div className="row justify-content-center">
        <h1 className="heading"> ATHLETES: </h1>
        <button onClick={this.props.sortByFirstName}>sort by first name</button>
        <button onClick={this.props.sortByLastName}>sort by last name</button>
        <button onClick={this.props.sortByTeamName}>sort by team name</button>
        <button onClick={this.props.sortBySport}>sort by sport name</button>
        <button onClick={this.props.sortByPosition}>sort by position</button>
      </div>

            <div className="row justify-content-center">

                        <div className="col-2 list-group-item-dark athlete-heading">
                        First Name
                        <i className={this.props.sortedByFirstName ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Last Name
                        <i className={this.props.sortedByLastName ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Sport
                        <i className={this.props.sortedBySport ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Team
                        <i className={this.props.sortedByTeamName ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading">
                        Position
                        <i className={this.props.sortedByPosition ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark">
                        </div>

            </div>



                        {this.props.athletes.filter
                          (athlete=>athlete.name.split(' ')[0].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                    athlete.name.split(' ')[1].toLowerCase().includes(this.props.filterString.toLowerCase())||
                                    athlete.name.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                    athlete.sport.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                    athlete.teamName.toLowerCase().includes(this.props.filterString.toLowerCase())||
                                    athlete.position.toLowerCase().includes(this.props.filterString.toLowerCase())
                        ).map(athlete=>
                          <div className="row justify-content-center">
                          <div className="col-2 list-group-item athleteinfo">{athlete.name.split(' ')[0]}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.name.split(' ')[1]}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.sport}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.teamName}</div>
                          <div className="col-2 list-group-item athleteinfo">{athlete.position}</div>
                          <div  className="col-2 list-group-item athleteinfo"><button id={athlete.id}className="btn-lg btn-success" onClick={this.props.draft}> Add to My Team </button></div>
                          </div>
                                            )}











</div>

    )
  }
}

export default Athletes
