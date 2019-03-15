import React, {Component} from 'react'
import mlb from './images/mlb.jpg'
import jeter from './images/jeter.jpg'

import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Baseball extends Component{
  render(){
  return(
        <div className='container'>

        <Link to={ROUTES.SPORTS}>Sports</Link>
<div className='row justify-content-center'>
        <img className="sportLogo" src={mlb} alt='baseball'/>
</div>
<br/><br/>
<div className='row justify-content-center'>
<p className='sport-desc'>
Major League Baseball (MLB) is a professional baseball organization that constitutes one of the four major professional sports leagues in North America. It is the oldest league of the four. Teams play in the American League (AL) and National League (NL), which operated as separate legal entities from 1901 and 1876 respectively. In 2000, the leagues merged into a single organization led by the Commissioner of Baseball. The organization oversees minor league baseball leagues, which operate about 240 teams affiliated with the major-league clubs. With the International Baseball Federation, the league also manages the international World Baseball Classic tournament.

Baseball's first professional team was founded in Cincinnati in 1869. The first few decades of professional baseball were characterized by rivalries between leagues and by players who often jumped from one team or league to another. The period before 1920 in baseball was known as the dead-ball era; players rarely hit home runs during this time. Baseball survived a game-throwing incident known as the Black Sox Scandal in the 1919 World Series. Baseball rose in popularity in the 1920s, and survived potential downturns during the Great Depression and World War II. Shortly after the war, baseball's color barrier was broken by Jackie Robinson.

The 1950s and 1960s were a time of expansion for the AL and NL, then new stadiums and artificial turf surfaces began to change the game in the 1970s and 1980s. Home runs dominated the game during the 1990s, and media reports began to discuss the use of anabolic steroids among Major League players in the mid-2000s. In 2006, an investigation produced the Mitchell Report, which implicated many players in the use of performance-enhancing substances, including at least one player from each team.

Today, MLB is composed of thirty teams: Twenty-nine in the United States and one in Canada. Teams play 162 games each season. Five teams in each league advance to a four-round postseason tournament that culminates in the World Series, a best-of-seven championship series between the two league champions that dates to 1903. Baseball broadcasts are aired throughout North America and in several other countries throughout the world. Games are aired on television, radio, and the Internet. MLB has the highest season attendance of any sports league in the world with more than 74 million spectators in 2013.
</p>
</div>


<div className='row justify-content-center'>
        <img className="sportLogo" src={jeter} alt='baseball'/>
        <br/><br/>
</div>




        </div>
  )
}
}
export default Baseball
