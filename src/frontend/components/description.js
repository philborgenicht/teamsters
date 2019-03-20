import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../constants/routes.js'

class Description extends Component{



  render(){
    return(
      <div className='container'>
      <div className='row justify-content-center'>
<h1>TEAMSTERS!</h1>
      </div>
<p>Hello and welcome to Teamsters, the premier sports web app. We specialize in the four major sports in the U.S., hockey, football, baseball, and basketball.
Take a look around in the practice box and see which athletes, teams, and sports you want to add to your list, albeit only temporarily.
</p>

<p>Once you have completed your profile, however, head on over to the manager box where you can recruit players, purchase teams, and collect sports and have them
saved to your profile for each and every time you come to the site.
</p>

<p>
If you are looking for more information about sports, head over to the stats section, where you can search athletes by name, search teams by league, search rosters by team,
or even find upcoming events all around the world or coming to a screen near you.
</p>

<p>
Thank you for stopping by!
</p>

      </div>
    )
  }
}

export default Description
