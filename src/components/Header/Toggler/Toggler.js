import React, { useState, useRef, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import './toggle.css';
import statistics from '../../../images/Statistics.svg';
import map from '../../../images/map.png';
import time from '../../../images/time.png';
import activity from '../../../images/activity.svg';
import invoices from '../../../images/Invoices.svg'
import schedule from '../../../images/Schedule.svg'


export default function Toggle (props) {
    
    const [isActive, setActive] = useState(true);

    const toggleSidenav = () => {
        setActive(!isActive);
    }

    return (
      <div>
        <button className="toggle" onClick={toggleSidenav} id="nav-btn">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </button>
        <div className={isActive ? 'hidden' : 'show'}>
            <div className="panel-group navbar-toggler"id="flag">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NavLink  to='/'>
                                <img src={activity} className="infoNav" width="15px" height="15px" alt=""/>
                                Activity
                            </NavLink>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NavLink  to='/map'>
                                <img src={map} className="infoNav" width="15px" height="15px" alt=""/>
                                Map
                            </NavLink>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NavLink to='/time'>
                                <img src={time} className="infoNav" width="15px" height="15px" alt=""/>
                                Time
                            </NavLink>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NavLink  to='statistics'>
                                <img className="infoNav" width="15px" height="15px" src={statistics} alt=""/>
                                Statistics
                            </NavLink>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NavLink to='invoices'>
                                <img src={invoices}  width="15px" height="15px" alt="i"/>
                                Invoices
                            </NavLink>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NavLink  to='schedule'>
                                <img src={schedule} width="15px" height="15px" alt="sh"/>
                                Schedule
                            </NavLink>
                        </div>
                    </div>
                </div>
            <div/>
        </div>
    </div>
     );
} 