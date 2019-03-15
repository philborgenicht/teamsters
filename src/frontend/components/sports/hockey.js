import React , {Component} from 'react'
import nhl from './images/nhl.jpg'
import logo from './images/nhllogo2.jpg'
import graffiti from './images/nhlgraffiti.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Hockey extends Component {
  render(){
  return(
          <div className='container'>
                    <Link to={ROUTES.SPORTS}>Sports</Link>
<div className='row justify-content-center'>
          <img className="sportLogo" src={nhl} alt='baseball'/>
</div>
<br/><br/>
<div className='row justify-content-center'>
<p className='sport-desc'>
The National Hockey League (NHL; French: Ligue nationale de hockey—LNH) is a professional ice hockey league composed of 30 member clubs: 23 in the United States and 7 in Canada. Headquartered in New York City, the NHL is widely considered to be the premier professional ice hockey league in the world, and one of the major professional sports leagues in the United States and Canada. The Stanley Cup, the oldest professional sports trophy in North America, is awarded annually to the league playoff champion at the end of each season.

The National Hockey League was organized on November 26, 1917, in Montreal, Quebec, after the suspension of operations of its predecessor organization, the National Hockey Association (NHA), which had been founded in 1909 in Renfrew Ontario. It started with four teams (all based in Canada) and, through a series of expansions, contractions, and relocations, is now composed of thirty active franchises. The "nation" referred to by the league's name was Canada, although the league has now been binational since 1924 when its first team in the United States, the Boston Bruins, began play. After a labour-management dispute that led to the cancellation of the entire 2004–05 season, the league resumed play under a new collective agreement that included a salary cap. In 2009, the NHL enjoyed record highs in terms of sponsorships, attendance, and television audiences.

The league draws many highly skilled players from all over the world and currently has players from approximately 20 different countries. Canadians have historically constituted the majority of the players in the league, with a dramatically increasing percentage of American and European players in recent years.
</p>

</div>
<div className='row justify-content-center'>
          <img className="sportLogo" src={logo} alt='baseball'/>
          <img className="sportLogo" src={graffiti} alt='baseball'/>
</div>

          </div>
  )
}
}
export default Hockey
