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
      <Link to={ROUTES.PRACTICE}><button className='btn btn-info'>Practice</button></Link>
</div>

    <div className="col-2">
      <Link to={ROUTES.ROSTER}><button className='btn btn-info'>Roster</button></Link>
</div>

<div className="col-2">
      <Link to={ROUTES.MYTEAMS}><button className='btn btn-info'>My Teams</button></Link>
</div>

<div className="col-2">
      <Link to={ROUTES.MYSPORTS}><button className='btn btn-info'>My Sports</button></Link>
</div>
<div className="col-2">
      <Link to={ROUTES.ATHLETES}><button className='btn btn-info'>Athletes</button></Link>
</div>

      <div className="col-2">
      <Link to={ROUTES.SPORTS}><button className='btn btn-info'>Sports</button></Link></div>
</div>


<div className="row justify-content-center">
<h1 className="heading"> Teams </h1>
</div>



<div className="row justify-content-center">

<div className="col-2 list-group-item-dark team-heading column-heading">
Name
<i className={props.sortedByTeamTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark team-heading column-heading">
City
<i className={props.sortedByCityTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark team-heading column-heading">
State
<i className={props.sortedByStateTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark team-heading column-heading">
Sport
<i className={props.sortedBySportTitle ? "fa fa-spinner fa-pulse" : ''}></i>
</div>

<div className="col-2 list-group-item-dark column-info">
</div>

</div>

<div className="row justify-content-center">

<div className="col-2 list-group-item-dark column-info">
<button className="btn btn-sm btn-primary" onClick={props.sortByTeamTitle}> Sort </button>
</div>

<div className="col-2 list-group-item-dark column-info">
<button className="btn btn-sm btn-primary" onClick={props.sortByCityTitle}> Sort </button>
</div>

<div className="col-2 list-group-item-dark column-info">
<button className="btn btn-sm btn-primary" onClick={props.sortByStateTitle}> Sort</button>
</div>

<div className="col-2 list-group-item-dark column-info">
<button className="btn btn-sm btn-primary" onClick={props.sortBySportTitle}> Sort </button>
</div>

<div className="col-2 list-group-item-dark column-info">
</div>
</div>

{props.teams.filter(team=>
                          team.name.toLowerCase().includes(props.filterString.toLowerCase())||
                          team.city.toLowerCase().includes(props.filterString.toLowerCase())||
                          team.sportName.toLowerCase().includes(props.filterString.toLowerCase())||
                          team.state.toLowerCase().includes(props.filterString.toLowerCase())



                        ).map(team=>(

<div className="row justify-content-center">

<div className="col-2 list-group-item column-info">
{team.name}
</div>

<div className="col-2 list-group-item column-info">
{team.city}
</div>

<div className="col-2 list-group-item column-info">
{team.state}
</div>

<div className="col-2 list-group-item column-info">
{team.sportName}
</div>

<div className="col-2 list-group-item">
<button className="btn btn-dark"id={team.id} onClick={props.acquireTeam}> acquire team </button>
</div>






</div>
))}











      </div>
    )

}

export default Teams
