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
    <br/><hr/>
<div className="row justify-content-center">



<div className="col-2">
    <Link to={ROUTES.PRACTICE}><button className='btn btn-info'>Practice</button></Link>
</div>
<div className="col-2">
    <Link to={ROUTES.ROSTER}><button className='btn btn-info'>Roster</button></Link>
</div>
<div className="col-2">
    <Link to={ROUTES.MYTEAMS}><button className='btn btn-info'>My Teams</button></Link>
</div>
<div className="col-2">
    <Link to={ROUTES.MYSPORTS}><button className='btn btn-info'>My Sports</button></Link>
</div>
<div className="col-2">
    <Link to={ROUTES.ATHLETES}><button className='btn btn-info'>Athletes</button></Link>
</div>
<div className="col-2">
    <Link to={ROUTES.TEAMS}><button className='btn btn-info'>Teams</button></Link>
</div>


</div>
<hr/>
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
    <h3>{sport.name}</h3>
</div>
<div className='col-6'>
 <button className="btn btn-block btn-dark" onClick={this.props.acquireSport} id={sport.id}> Add to List </button>
</div>
</div>
</div>

    ))}
</div>
<div className="col-6">

<div className="row list-group-item sport-title">
<Link to={ROUTES.FOOTBALL}><button className='btn btn-dark'>Football</button></Link>

</div>

<div className="row list-group-item sport-title">
<Link to={ROUTES.BASEBALL}><button className='btn btn-dark'>Baseball</button></Link>

</div>

<div className="row list-group-item sport-title">
<Link to={ROUTES.BASKETBALL}><button className='btn btn-dark'>Basketball</button></Link>

</div>

<div className="row list-group-item sport-title">
<Link to={ROUTES.HOCKEY}><button className='btn btn-dark'>Hockey</button></Link>

</div>


</div>
</div>








    </div>
  )
}
}

export default Sports
