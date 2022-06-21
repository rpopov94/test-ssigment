import React from 'react';
import {NavLink} from 'react-router-dom';
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
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item user_page">
                        <img src={back} width="13.34px" height="11.6px" alt=""/>
                        <NavLink  to='/'><span class="bold">User pages</span> - Profile</NavLink>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <NavLink  to='statistics'>
                             <img src={statistics} alt=""/>
                             <p>Statistics</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='invoices'>
                            <img src={invoices} alt=""/>
                            <p>Invoices</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to='schedule'>
                            <img src={schedule} alt=""/>
                            <p>Schedule</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            </nav>
        </div>
    );
}

export default Head;
