import React, {Component} from 'react'
import nfl from './images/nfl.png'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Football extends Component{
  render(){
  return(
        <div>hello

        <img className="sportLogo" src={nfl} alt='baseball'/>
        <Link to={ROUTES.SPORTS}>Sports</Link>
        </div>
  )
}
}
export default Football
