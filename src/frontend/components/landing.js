import React, {Component} from 'react'

export default class Landing extends Component{
state={}

render(){
  return(
    <div className="">
    <h1 className="heading">Welcome to Teamsters</h1>

    <p className="landing">Here at Teamsters, we specialize in data about all of your favorites sports, teams, and athletes.
    If you are not a member you can feel free to browse our collection of teams, rosters, and statistics.
    Once you have signed up, however, you can select your favorite teams, sports, and athletes, and make
    connections with other users who share your fanaticism.
    </p>

    <p className="landing">After creating your profile and selecting your favorites, you can always feel free to go back to
    your profile and edit those selections. You can also make your own "roster" of your favorite athletes,
    which is not limited to players of one sport. Your roster is more of just a dashboard of who you believe
    to be the best or most dominant across professional sports.
    </p>

    <p className="landing">We currently specialize in Basketball, Football, Baseball, and Hockey.
    </p>
    </div>
  )
}
}
