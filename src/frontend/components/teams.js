import React from 'react'
import Rangers from './teams/rangers.js'
import Rockies  from './teams/rockies.js'
import Lakers from './teams/lakers.js'
import Broncos from './teams/broncos.js'

const Team=(props)=>{

    return(


      <div className="component">
      {console.log(props.teams)}
<div className="row justify-content-center">
<h1 className="heading"> TEAMS </h1>
</div>
<div className="row justify-content-center">

<div className="col-3 list-group-item team-heading">
NAME
</div>

<div className="col-3 list-group-item team-heading">
CITY
</div>

<div className="col-3 list-group-item team-heading">
STATE
</div>

<div className="col-3 list-group-item team-heading">
SPORT
</div>

</div>



{props.teams.map(team=>
<div>
<div className="row justify-content-center">
<div className="col-3 list-group-item team-info">
{team.name}
</div>

<div className="col-3 list-group-item team-info">
{team.city}
</div>

<div className="col-3 list-group-item team-info">
{team.state}
</div>

<div className="col-3 list-group-item team-info">
{team.sportName}
</div>
</div>
</div>
)}



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

export default Team
