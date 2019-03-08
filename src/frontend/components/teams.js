import React from 'react'
import Rangers from './teams/rangers.js'
import Rockies  from './teams/rockies.js'
import Lakers from './teams/lakers.js'
import Broncos from './teams/broncos.js'

const Teams=(props)=>{

    return(


      <div className="component">
      {console.log(props.teams)}
<div className="row justify-content-center">
<h1 className="heading"> TEAMS </h1>
</div>
<div className="row justify-content-center">

<div className="col-2 list-group-item team-heading">
NAME
</div>

<div className="col-2 list-group-item team-heading">
CITY
</div>

<div className="col-2 list-group-item team-heading">
STATE
</div>

<div className="col-2 list-group-item team-heading">
SPORT
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
<button id={team.id} onClick={props.acquireTeam}> acquire team </button>
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
