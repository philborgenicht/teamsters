import React , {Component} from 'react'
import nhl from './images/nhl.png'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Hockey extends Component {
  render(){
  return(
          <div>hello

          <img className="sportLogo" src={nhl} alt='baseball'/>
          <Link to={ROUTES.SPORTS}>Sports</Link>
          </div>
  )
}
}
export default Hockey
