import React, {Component} from 'react'

export default class Landing extends Component{
state={}

render(){
  return(
    <div className="container">

    <h1 className="heading">Welcome to Teamsters</h1>

    <p className="landing">Here at Teamsters, we specialize in info about all of your favorites sports, teams, and athletes.
    If you are not a member you can feel free to browse our collection of teams, rosters, sports, and events.
    Once you have signed up, however, you can select your favorite teams, sports, and athletes.
    </p>

    <p className='landing'>In the "practice box", you can just play around with adding teams, athletes, and sports to your own lists, but it won't be saved to your profile.
    Once you feel ready, head on over to the "manager box", where you can really recruit players and clubs and have that saved.</p>

    <p className="landing">After creating your profile and selecting your favorites, you can always feel free to go back to
    your profile and edit those selections. You can also make your own "roster" of your favorite athletes,
    which is not limited to players of one sport. Your roster is more of just a dashboard of who you believe
    to be the best or most dominant across professional sports.
    </p>

    <p>Don't forget to head on over to the stats section where you can look up your favorite players, teams, and sports, search rosters, and even find out upcoming sporting events happening around the globe, or what will be available to watch on tv!</p>

    <p className="landing">We currently specialize in Basketball, Football, Baseball, and Hockey.
    </p>
    </div>
  )
}
}
