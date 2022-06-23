import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css'
import back from '../../images/back.png';
import statistics from '../../images/Statistics.svg';
import map from '../../images/map.png';
import time from '../../images/time.png';
import activity from '../../images/activity.svg';
import block from '../../images/block.png';
import settings from '../../images/settings.png';
import friends from '../../images/friends.svg';
import note from '../../images/note.svg';
import photos from '../../images/Photos.svg';
import invoices from '../../images/Invoices.svg'
import schedule from '../../images/Schedule.svg'


function Head() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg" id="navbar-vertical">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item user_page">
                        <img src={back} width="13.34px" height="11.6px" alt=""/>
                        <NavLink  to='/'><span class="bold">User pages</span> - Profile</NavLink>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <NavLink  to='statistics'>
                             <img src={statistics} alt="s"/>
                             <p>Statistics</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='invoices'>
                            <img src={invoices} alt="i"/>
                            <p>Invoices</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to='schedule'>
                            <img src={schedule} alt="sh"/>
                            <p>Schedule</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item activity">
                        <NavLink  to='/'>
                            <img src={activity} class="infoNav" width="13.34" height="11.6" alt=""/>
                            Activity
                        </NavLink>
                    </li>
                    <li className="nav-item map">
                        <NavLink  to='/map'>
                            <img src={map} class="infoNav" width="11.58" height="14.92" alt=""/>
                            Map
                        </NavLink>
                    </li>
                    <li className="nav-item time">
                        <NavLink to='/time'>
                            <img src={time} class="infoNav" width="15px" height="15px" alt=""/>
                            Time
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                        <img src={note} class='infoNav' width="16.67px" height="15px" alt="f"/>
                        Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={friends} class='infoNav' width="16.67px" height="15px" alt="f"/>
                            Friends</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={photos} class='infoNav' width="16.67px" height="15px" alt="f"/>
                            Photos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={settings} width="14.23px" height="14.99px" alt="s"/>
                            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={block} width="8.42px" height="5.3px" alt=""/>
                        </a>
                    </li>
                </ul>
                <button class="toggle" id="nav-btn">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </button>
            </nav>
            <div class="panel-group hidden navbar-toggler" id="flag">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <NavLink  to='/'>
                            <img src={activity} class="infoNav" width="15px" height="15px" alt=""/>
                            Activity
                        </NavLink>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <NavLink  to='/map'>
                            <img src={map} class="infoNav" width="15px" height="15px" alt=""/>
                            Map
                        </NavLink>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <NavLink to='/time'>
                            <img src={time} class="infoNav" width="15px" height="15px" alt=""/>
                            Time
                        </NavLink>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <NavLink  to='statistics'>
                             <img class="infoNav" width="15px" height="15px" src={statistics} alt=""/>
                             Statistics
                        </NavLink>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <NavLink to='invoices'>
                            <img src={invoices}  width="15px" height="15px" alt="i"/>
                            Invoices
                        </NavLink>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <NavLink  to='schedule'>
                            <img src={schedule} width="15px" height="15px" alt="sh"/>
                            Schedule
                        </NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Head;
