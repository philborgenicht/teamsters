import React  from 'react'
import rangers from './images/rangers.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
const Rangers=(props)=>{
  return(
    <div>



    <img className="teamLogo" src={rangers} alt="rangers" />


    <Link to={ROUTES.TEAMS}>Teams</Link>
    </div>
  )
}

export default Rangers
