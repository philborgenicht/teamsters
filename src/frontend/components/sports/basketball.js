import React, {Component} from 'react'
import nba from './images/nba.jpg'
import map from './images/nbamap.jpg'
import graffiti from './images/nbagraffiti.jpg'
import goats from './images/kobemikelebron.png'
import steph from './images/stephcurry.jpg'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

class Basketball extends Component{
  render(){
  return(
        <div className='container'>
          <hr/>
        <div className='row justify-content-center'>
        <div className='col-3'>
                <Link to={ROUTES.SPORTS}><button className='btn btn-block btn-info'>Sports</button></Link>
        </div>
        <div className='col-3'>
                <Link to={ROUTES.HOCKEY}><button className='btn btn-block btn-info'>Hockey</button></Link>
        </div>
        <div className='col-3'>
                <Link to={ROUTES.BASKETBALL}><button className='btn btn-block btn-info'>Basketball</button></Link>
        </div>
        <div className='col-3'>
                <Link to={ROUTES.BASEBALL}><button className='btn btn-block btn-info'>Baseball</button></Link>
        </div>
        </div>
          <hr/>
        <div className='row justify-content-center'>
        <img className="sportLogo" src={nba} alt='baseball'/>
        </div>
        <br/><br/>

        <div className='row justify-content-center'>
        <p className='sport-desc'>
        The National Basketball Association (NBA) is the pre-eminent men's professional basketball league in North America, and is widely considered to be the premier men's professional basketball league in the world. It has 30 franchised member clubs (29 in the United States and 1 in Canada), and is an active member of USA Basketball (USAB), which is recognized by FIBA (also known as the International Basketball Federation) as the national governing body for basketball in the United States. The NBA is one of the four major North American professional sports leagues. NBA players are the world's best paid sportsmen, by average annual salary per player.

The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA). The league adopted the name National Basketball Association on August 3, 1949, after merging with its rival National Basketball League (NBL). The league's several international as well as individual team offices are directed out of its head offices located in the Olympic Tower at 645 Fifth Avenue in New York City. NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey.

The Basketball Association of America was founded in 1946 by owners of the major ice hockey arenas in the Northeastern and Midwestern United States and Canada. On November 1, 1946, in Toronto, Ontario, Canada, the Toronto Huskies hosted the New York Knickerbockers at Maple Leaf Gardens, in a game the NBA now regards as the first played in its history. The first basket was made by Ossie Schectman of the Knickerbockers. Although there had been earlier attempts at professional basketball leagues, including the American Basketball League and the NBL, the BAA was the first league to attempt to play primarily in large arenas in major cities. During its early years, the quality of play in the BAA was not significantly better than in competing leagues or among leading independent clubs such as the Harlem Globetrotters. For instance, the 1948 ABL finalist Baltimore Bullets moved to the BAA and won that league's 1948 title, and the 1948 NBL champion Minneapolis Lakers won the 1949 BAA title. Prior to the 1948-49 season, however, NBL teams from Fort Wayne, Indianapolis, Minneapolis, and Rochester jumped to the BAA, which established the BAA as the league of choice for collegians looking to turn professional.

The headquarters of the National Basketball Association in the Olympic Tower at 645 Fifth Avenue, Midtown Manhattan, New York City, USA.
Following the 1948-49 season, the BAA took in the remainder of the NBL: Syracuse, Anderson, Tri-Cities, Sheboygan, Denver, and Waterloo. In deference to the merger and to avoid possible legal complications, the league name was changed from the BAA to the National Basketball Association in spite of having the same BAA governing body including Podoloff. The new league had seventeen franchises located in a mix of large and small cities, as well as large arenas and smaller gymnasiums and armories. In 1950, the NBA consolidated to eleven franchises, a process that continued until 1953–54, when the league reached its smallest size of eight franchises, all of which are still in the league (the New York Knicks, Boston Celtics, Golden State Warriors, Los Angeles Lakers, Royals/Kings, Detroit Pistons, Atlanta Hawks, and Nationals/76ers). The process of contraction saw the league's smaller-city franchises move to larger cities. The Hawks shifted from 'Tri-Cities' (the area now known as the Quad Cities) to Milwaukee (in 1951) and then to St. Louis, Missouri (in 1955); the Royals from Rochester, New York to Cincinnati (in 1957); and the Pistons from Fort Wayne, Indiana to Detroit (in 1957).

Japanese-American Wataru Misaka broke the NBA color barrier in the 1947–48 season when he played for the New York Knicks. He remained the only non-white player in league history prior to the first African-American, Harold Hunter, signing with the Washington Capitols in 1950. Hunter was cut from the team during training camp, but several African-American players did play in the league later that year, including Chuck Cooper with the Celtics, Nathaniel 'Sweetwater' Clifton with the Knicks, and Earl Lloyd with the Washington Capitols. During this period, the Minneapolis Lakers, led by center George Mikan, won five NBA Championships and established themselves as the league's first dynasty. To encourage shooting and discourage stalling, the league introduced the 24-second shot clock in 1954. If a team does not attempt to score a field goal (or the ball fails to make contact with the rim) within 24 seconds of obtaining the ball, play is stopped and the ball given to its opponent.</p>
        </div>


        <div className='row justify-content-center'>
        <img className="sportLogo" src={steph} alt='baseball'/>
        <img className="sportLogo" src={map} alt='baseball'/>
        <img className="sportLogo" src={graffiti} alt='baseball'/>
        <img className="sportLogo" src={goats} alt='baseball'/>
        </div>

        </div>
  )
}
}
export default Basketball
