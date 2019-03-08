import React, {Component} from 'react'
import nba from './images/nba.png'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Basketball extends Component{
  render(){
  return(
        <div>hello

        <img className="sportLogo" src={nba} alt='baseball'/>
        <Link to={ROUTES.SPORTS}>Sports</Link>
        </div>
  )
}
}
export default Basketball
