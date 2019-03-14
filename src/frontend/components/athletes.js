import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../constants/routes.js'

class Athletes extends Component{



  render(){
    return(
      <div className="container ">



      <div className="row justify-content-center">

<div className='col-2'>
<Link to={ROUTES.PRACTICE}>Practice</Link>
</div>

<div className='col-2'>
<Link to={ROUTES.ROSTER}>Roster</Link>
</div>

<div className='col-2'>
<Link to={ROUTES.MYTEAMS}>My Teams</Link>
</div>

<div className='col-2'>
<Link to={ROUTES.MYSPORTS}>My Sports</Link>
</div>

<div className='col-2'>
<Link to={ROUTES.TEAMS}>Teams</Link>
</div>

<div className='col-2'>
<Link to={ROUTES.SPORTS}>Sports</Link>
</div>

      </div>
      <div className="row justify-content-center">
        <h1 className="heading"> ATHLETES </h1>
      </div>



            <div className="row justify-content-center">

                        <div className="col-2 list-group-item-dark athlete-heading">
                        First Name
                        <i className={this.props.sortedByFirstName ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading column-heading">
                        Last Name
                        <i className={this.props.sortedByLastName ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading column-heading">
                        Sport
                        <i className={this.props.sortedBySport ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading column-heading">
                        Team
                        <i className={this.props.sortedByTeamName ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark athlete-heading column-heading">
                        Position
                        <i className={this.props.sortedByPosition ? "fa fa-spinner fa-pulse" : ''}></i>
                        </div>

                        <div className="col-2 list-group-item-dark">
                        </div>

            </div>
            <div className="row justify-content-center">

            <div className="col-2 list-group-item-dark column-info">
              <button className="btn btn-sm btn-dark" onClick={this.props.sortByFirstName}>sort </button>
            </div>

            <div className="col-2 list-group-item-dark column-info">
              <button className="btn btn-sm btn-dark" onClick={this.props.sortByLastName}>sort </button>
            </div>

            <div className="col-2 list-group-item-dark column-info">
              <button className="btn btn-sm btn-dark" onClick={this.props.sortBySport}>sort </button>
            </div>

            <div className="col-2 list-group-item-dark column-info">
              <button className="btn btn-sm btn-dark" onClick={this.props.sortByTeamName}>sort </button>
            </div>


            <div className="col-2 list-group-item-dark column-info">
              <button className="btn btn-sm btn-dark" onClick={this.props.sortByPosition}>sort </button>
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
                          <div className="col-2 list-group-item athleteinfo column-info">{athlete.name.split(' ')[0]}</div>
                          <div className="col-2 list-group-item athleteinfo column-info">{athlete.name.split(' ')[1]}</div>
                          <div className="col-2 list-group-item athleteinfo column-info">{athlete.sport}</div>
                          <div className="col-2 list-group-item athleteinfo column-info">{athlete.teamName}</div>
                          <div className="col-2 list-group-item athleteinfo column-info">{athlete.position}</div>
                          <div  className="col-2 list-group-item athleteinfo column-info"><button className="btn btn-outline-success" id={athlete.id}className="btn btn-sm btn-success" onClick={this.props.draft}> Add to My Team </button></div>
                          </div>
                                            )}











</div>

    )
  }
}

export default Athletes
