import React, {Component} from 'react'
import Football from './sports/football.js'
import Baseball from './sports/baseball.js'
import Basketball from './sports/basketball.js'
import Hockey from './sports/hockey.js'

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
    <h1 className="heading">SPORTS!</h1>
    </div>
    <div className="row">

    <div className="col-3 list-group-item sport-heading">
    Basketball
    </div>

    <div className="col-3 list-group-item sport-heading">
    Baseball
    </div>

    <div className="col-3 list-group-item sport-heading">
    Football
    </div>

    <div className="col-3 list-group-item sport-heading">
    Hockey
    </div>




    </div>


    <div className="row">


        <div className="col-3">
              {this.state.displayBasketball?
                <div >
                <Basketball/>
                <button className="btn-lg btn-primary" onClick={this.hideBasketball}> dismiss basketball </button>
                </div>:
                <button className="btn-lg btn-primary" onClick={this.showBasketball}> show basketball </button>}
        </div>

        <div className="col-3">
              {this.state.displayBaseball?
                <div >
                <Baseball/>
                <button className="btn-lg btn-primary" onClick={this.hideBaseball}> dismiss baseball </button>
                </div>:
                <button className="btn-lg btn-primary" onClick={this.showBaseball}> show baseball </button>}
        </div>


          <div className="col-3">
              {this.state.displayFootball?
                <div >
                <Football/>
                <button className="btn-lg btn-primary" onClick={this.hideFootball}> dismiss football </button>
                </div>:
                <button className="btn-lg btn-primary" onClick={this.showFootball}> show football </button>}
          </div>


          <div className="col-3">
              {this.state.displayHockey?
                <div >
                <Hockey/>
                <button className="btn-lg btn-primary" onClick={this.hideHockey}> dismiss hockey </button>
                </div>:
                <button className="btn-lg btn-primary" onClick={this.showHockey}> show hockey </button>}
          </div>

      </div>


    </div>
  )
}
}

export default Sports
