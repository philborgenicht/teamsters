import React, {Component} from 'react'
import mlb from './images/mlb.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Baseball extends Component{
  render(){
  return(
        <div>hello

        <img className="sportLogo" src={mlb} alt='baseball'/>

        <Link to={ROUTES.SPORTS}>Sports</Link>
        </div>
  )
}
}
export default Baseball
