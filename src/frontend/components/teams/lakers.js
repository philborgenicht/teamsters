import React from 'react'
import lakers from './images/lakers.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
const Lakers=(props)=>{
  return(
    <div>



    <img className="teamLogo" src={lakers} alt="lakers" />


    <Link to={ROUTES.TEAMS}>Teams</Link>
    </div>
  )
}

export default Lakers
