import React, {Component} from 'react'
import nfl from './images/nfl.jpg'
import huddle from './images/nflhuddle.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Football extends Component{
  render(){
  return(
        <div className='container'>
        <Link to={ROUTES.SPORTS}>Sports</Link>
        <div className='row justify-content-center'>
                <img className="sportLogo" src={nfl} alt='baseball'/>

        </div>
        <br/><br/>
        <div className='row justify-content-center'>
        <p className='sport-desc'>
        The National Football League (NFL) is a professional American football league of 32 teams, divided equally between the National Football Conference (NFC) and the American Football Conference (AFC). The NFL is one of the four major professional sports leagues in North America, and the highest professional level of American football in the world. The NFL's 17-week regular season runs from the week after Labor Day to the week after Christmas, with each team playing sixteen games and having one bye week. Following the conclusion of the regular season, six teams from each conference (four division winners and two wild card teams) advance to the playoffs, a single-elimination tournament culminating in the Super Bowl, played between the champions of the NFC and AFC.

The NFL was formed in 1920 as the American Professional Football Association (APFA) before renaming itself the National Football League for the 1923 season. The NFL agreed to merge with the American Football League (AFL) in 1966, and the first Super Bowl was held at the end of that season; the merger was completed in 1970. Today, the NFL has the highest average attendance (67,591) of any professional sports league in the world and is the most popular sports league in the United States. The Super Bowl is among the biggest club sporting events in the world and individual Super Bowl games account for many of the most-watched television programs in American history. At the corporate level, the NFL is a nonprofit 501(c)(6) association. The NFL's executive officer is the commissioner, who has broad authority in governing the league.

The team with the most NFL championships is the Green Bay Packers with thirteen; the team with the most Super Bowl championships is the Pittsburgh Steelers with six. The current NFL champions are the Denver Broncos, who defeated the Carolina Panthers 24–10 in Super Bowl 50.
</p>        </div>

<div className='row justify-content-center'>
        <img className="sportLogo" src={huddle} alt='baseball'/>
</div>


        </div>
  )
}
}
export default Football
