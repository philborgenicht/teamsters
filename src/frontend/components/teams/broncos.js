import React from 'react'
import broncos from './images/broncos.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
const Broncos=(props)=>{
  return(
    <div>


    <img className="teamLogo" src={broncos} alt="broncos" />
    <Link to={ROUTES.TEAMS}>Teams</Link>



    </div>
  )
}

export default Broncos
