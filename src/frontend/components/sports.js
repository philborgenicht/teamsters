import React, {Component} from 'react'
import Football from './sports/football.js'
import Baseball from './sports/baseball.js'
import Basketball from './sports/basketball.js'
import Hockey from './sports/hockey.js'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes.js';

class Sports extends Component{
  state={
    displayBasketball:false,
    displayBaseball:false,
    displayFootball:false,
    displayHockey:false
  }



  hideBasketball=()=>{
    this.setState({displayBasketball:false})
  }

  hideFootball=()=>{
    this.setState({displayFootball:false})
  }

  hideBaseball=()=>{
    this.setState({displayBaseball:false})
  }

  hideHockey=()=>{
    this.setState({displayHockey:false})
  }

  showBasketball=()=>{
    this.setState({displayBasketball:true})
  }

  showBaseball=()=>{
    this.setState({displayBaseball:true})
  }

  showFootball=()=>{
    this.setState({displayFootball:true})
  }

  showHockey=()=>{
    this.setState({displayHockey:true})
  }










  render(){
  return(
    <div className="container ">
<div className="row justify-content-center">



<div className="col-2">
    <Link to={ROUTES.PRACTICE}>Practice</Link>
</div>
<div className="col-2">
    <Link to={ROUTES.ROSTER}>Roster</Link>
</div>
<div className="col-2">
    <Link to={ROUTES.MYTEAMS}>My Teams</Link>
</div>
<div className="col-2">
    <Link to={ROUTES.MYSPORTS}>My Sports</Link>
</div>
<div className="col-2">
    <Link to={ROUTES.TEAMS}>Teams</Link>
</div>
<div className="col-2">
    <Link to={ROUTES.ATHLETES}>Athletes</Link>
</div>

</div>
    <div className="row justify-content-center">
    <h1 className="heading">SPORTS!</h1>
    </div>





<div className="row">
<div className="col-6">
    {this.props.sports.filter(sport=>
                                    sport.name.toLowerCase().includes(this.props.filterString.toLowerCase())




                                  ).map(sport=>(

<div className="list-group-item">
<div className="row">
<div className='col-6 column-info'>
    {sport.name}
</div>
<div className='col-6'>
 <button className="btn btn-block btn-success" onClick={this.props.acquireSport} id={sport.id}> add to list </button>
</div>
</div>
</div>

    ))}
</div>
<div className="col-6">

<div className="row list-group-item sport-title">
<Link to={ROUTES.FOOTBALL}>Football</Link>

</div>

<div className="row list-group-item sport-title">
<Link to={ROUTES.BASEBALL}>Baseball</Link>

</div>

<div className="row list-group-item sport-title">
<Link to={ROUTES.BASKETBALL}>Basketball</Link>

</div>

<div className="row list-group-item sport-title">
<Link to={ROUTES.HOCKEY}>Hockey</Link>

</div>


</div>
</div>








    </div>
  )
}
}

export default Sports
