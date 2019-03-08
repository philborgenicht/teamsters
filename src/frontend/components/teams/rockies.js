import React from 'react'
import rockies from './images/rockies.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
const Rockies=(props)=>{
  return(
    <div>

    <img className="teamLogo" src={rockies} alt="rockies" />



    <Link to={ROUTES.TEAMS}>Teams</Link>

    </div>
  )
}

export default Rockies
