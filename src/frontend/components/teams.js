import React from 'react'
import Rangers from './teams/rangers.js'
import Rockies  from './teams/rockies.js'
import Lakers from './teams/lakers.js'
import Broncos from './teams/broncos.js'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../constants/routes.js'

const Teams=(props)=>{

    return(


      <div className="container">

<div className="row justify-content-center">
<div className="col-2">
      <Link to={ROUTES.PRACTICE}>Practice</Link>
</div>

    <div className="col-2">
      <Link to={ROUTES.ROSTER}>Roster</Link>
</div>

<div className="col-2">
      <Link to={ROUTES.MYTEAMS}>My Teams</Link>
</div>

<div className="col-2">
      <Link to={ROUTES.MYSPORTS}>My Sports</Link>
</div>
<div className="col-2">
      <Link to={ROUTES.ATHLETES}>Athletes</Link>
</div>

      <div className="col-2">
      <Link to={ROUTES.SPORTS}>Sports</Link></div>
</div>


<div className="row justify-content-center">
<h1 className="heading"> TEAMS </h1>
</div>



<div className="row justify-content-center">

<div className="col-2 list-group-item-dark team-heading">
NAME
<i className={props.sortedByTeamTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark team-heading">
CITY
<i className={props.sortedByCityTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark team-heading">
STATE
<i className={props.sortedByStateTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark team-heading">
SPORT
<i className={props.sortedBySportTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark">
</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={props.sortByTeamTitle}> sort by name </button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={props.sortByCityTitle}> sorty by city</button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={props.sortByStateTitle}> sorty by state </button>
</div>

<div className="col-2 list-group-item-dark">
<button className="btn btn-sm btn-primary" onClick={props.sortBySportTitle}> sorty by sport </button>
</div>

<div className="col-2 list-group-item-dark">
</div>
</div>

{props.teams.filter(team=>
                          team.name.toLowerCase().includes(props.filterString.toLowerCase())||
                          team.city.toLowerCase().includes(props.filterString.toLowerCase())||
                          team.sportName.toLowerCase().includes(props.filterString.toLowerCase())||
                          team.state.toLowerCase().includes(props.filterString.toLowerCase())



                        ).map(team=>(

<div className="row justify-content-center">

<div className="col-2 list-group-item">
{team.name}
</div>

<div className="col-2 list-group-item">
{team.city}
</div>

<div className="col-2 list-group-item">
{team.state}
</div>

<div className="col-2 list-group-item">
{team.sportName}
</div>

<div className="col-2 list-group-item">
<button className="btn btn-outline-success"id={team.id} onClick={props.acquireTeam}> acquire team </button>
</div>






</div>
))}



<div className="row">

<div className="col-3">
      <Rangers />
</div>
<div className="col-3">
      <Rockies />
</div>
<div className="col-3">
      <Lakers />
</div>
<div className="col-3">
      <Broncos />
</div>
</div>







      </div>
    )

}

export default Teams
