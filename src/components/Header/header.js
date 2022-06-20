import React from 'react';
import back from '../../images/back.png';
import statistics from '../../images/Statistics.png';
import map from '../../images/map.png';
import time from '../../images/time.png';
import activity from '../../images/activity.svg';
import block from '../../images/block.png';
import settings from '../../images/settings.png';
import friends from '../../images/friends.svg';


function Head() {
    return (
        <div className='container'>
            {/* <p class="title">Главная</p> */}
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item user_page">
                        <img src={back} width="13.34px" height="11.6px" alt=""/>
                        <a className="navbar-brand home" href="/">User pages - Profile</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/" className="nav-link">
                            <img src={statistics} alt=""/>
                            <p>Statistics</p>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.86938 7.18433C4.51039 7.18433 4.21938 6.89331 4.21938 6.53433V5.68422H3.36938C3.01039 5.68422 2.71938 5.3932 2.71938 5.03422C2.71938 4.67523 3.01039 4.38422 3.36938 4.38422H4.21938V3.53433C4.21938 3.17534 4.51039 2.88433 4.86938 2.88433C5.22836 2.88433 5.51938 3.17534 5.51938 3.53433V4.38422H6.36938C6.72836 4.38422 7.01938 4.67523 7.01938 5.03422C7.01938 5.3932 6.72836 5.68422 6.36938 5.68422H5.51938V6.53433C5.51938 6.89331 5.22836 7.18433 4.86938 7.18433Z" fill="#5095EC"/>
                                <path d="M6.38966 14.6766C6.13582 14.9305 5.72426 14.9305 5.47042 14.6766L4.86931 14.0755L4.26828 14.6765C4.01444 14.9304 3.60288 14.9304 3.34904 14.6765C3.0952 14.4227 3.0952 14.0111 3.34904 13.7573L3.95007 13.1563L3.3491 12.5553C3.09526 12.3014 3.09526 11.8899 3.3491 11.6361C3.60294 11.3822 4.0145 11.3822 4.26834 11.6361L4.86931 12.237L5.47036 11.636C5.7242 11.3821 6.13576 11.3821 6.3896 11.636C6.64344 11.8898 6.64344 12.3014 6.3896 12.5552L5.78855 13.1563L6.38966 13.7574C6.6435 14.0112 6.6435 14.4228 6.38966 14.6766Z" fill="#5095EC"/>
                                <path d="M12.2561 11.4544C11.8971 11.4544 11.6061 11.7454 11.6061 12.1044C11.6061 12.4634 11.8971 12.7544 12.2561 12.7544H14.2561C14.6151 12.7544 14.9061 12.4634 14.9061 12.1044C14.9061 11.7454 14.6151 11.4544 14.2561 11.4544H12.2561Z" fill="#5095EC"/>
                                <path d="M11.6061 14.1405C11.6061 13.7816 11.8971 13.4905 12.2561 13.4905H14.2561C14.6151 13.4905 14.9061 13.7816 14.9061 14.1405C14.9061 14.4995 14.6151 14.7905 14.2561 14.7905H12.2561C11.8971 14.7905 11.6061 14.4995 11.6061 14.1405Z" fill="#5095EC"/>
                                <path d="M11.6061 5.03428C11.6061 4.67529 11.8971 4.38428 12.2561 4.38428H14.2561C14.6151 4.38428 14.9061 4.67529 14.9061 5.03428C14.9061 5.39326 14.6151 5.68428 14.2561 5.68428H12.2561C11.8971 5.68428 11.6061 5.39326 11.6061 5.03428Z" fill="#5095EC"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 18C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3C1.4467 0 0.169119 1.1805 0.0154887 2.69327C0.00524668 2.79412 0 2.89645 0 3V15C0 16.6569 1.34315 18 3 18H15ZM1.3 3C1.3 2.06112 2.06112 1.3 3 1.3L8.35217 1.3V8.34625H1.3V3ZM1.3 9.64625V15C1.3 15.9389 2.06112 16.7 3 16.7H8.35217V9.64625H1.3ZM9.65217 16.7H15C15.9389 16.7 16.7 15.9389 16.7 15V9.64625H9.65217V16.7ZM16.7 8.34625V3C16.7 2.06112 15.9389 1.3 15 1.3H9.65217V8.34625H16.7Z" fill="#5095EC"/>
                            </svg>
                            <p>Invoices</p>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.65023 3.99888C3.29112 3.99888 3 4.28976 3 4.64858C3 5.00739 3.29112 5.29827 3.65023 5.29827H10.3527C10.7118 5.29827 11.0029 5.00739 11.0029 4.64858C11.0029 4.28976 10.7118 3.99888 10.3527 3.99888H3.65023Z" fill="#5095EC"/>
                            <path d="M3 7.64718C3 7.28836 3.29112 6.99748 3.65023 6.99748H10.3526C10.7118 6.99748 11.0029 7.28836 11.0029 7.64718C11.0029 8.006 10.7118 8.29688 10.3526 8.29688H3.65023C3.29112 8.29688 3 8.006 3 7.64718Z" fill="#5095EC"/>
                            <path d="M3 10.6458C3 10.287 3.29112 9.99609 3.65023 9.99609H6.8514C7.21051 9.99609 7.50163 10.287 7.50163 10.6458C7.50163 11.0046 7.21051 11.2955 6.8514 11.2955H3.65023C3.29112 11.2955 3 11.0046 3 10.6458Z" fill="#5095EC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.3936L0.00892674 2.59989C0.00892674 1.16462 1.1734 0.00109863 2.60986 0.00109863H11.3991C12.8355 0.00109863 14 1.16462 14 2.59989L13.9911 16.3991C13.9911 17.6529 12.6129 18.4191 11.5467 17.7581L9.87153 16.7196C9.66344 16.5906 9.39786 16.601 9.20046 16.7458L7.91232 17.6909C7.34861 18.1045 6.58141 18.1045 6.01768 17.6909L4.73916 16.7529C4.54025 16.607 4.27229 16.5976 4.06373 16.7294L2.45607 17.7453C1.39034 18.4187 0 17.6536 0 16.3936ZM12.6911 16.3983L12.7 2.59989C12.7 1.8836 12.1186 1.3011 11.3991 1.3011H2.60986C1.89036 1.3011 1.30893 1.88444 1.30893 2.60073L1.3 16.3939C1.30021 16.6278 1.55998 16.7737 1.76164 16.6463L3.3693 15.6304C4.02973 15.2131 4.87828 15.2426 5.50817 15.7047L6.78669 16.6428C6.89273 16.7205 7.03728 16.7205 7.14331 16.6428L8.43145 15.6977C9.05653 15.2391 9.89756 15.2062 10.5565 15.6147L12.2316 16.6532C12.4335 16.7783 12.6911 16.6312 12.6911 16.3983Z" fill="#5095EC"/>
                            </svg>
                            <p>Schedule</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item activity">
                        <a className="nav-link" href="/">
                            <img src={activity} width="13.34" height="11.6" alt=""/>
                            Activity</a>
                    </li>
                    <li className="nav-item map">
                        <a className="nav-link mb-0" href="/map">
                            <img src={map} width="11.58" height="14.92" alt=""/>
                            Map</a>
                    </li>
                    <li className="nav-item time">
                        <a className="nav-link" href="/time">
                            <img src={time} width="15px" height="15px" alt=""/>
                            Time</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            </svg>
                        Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={friends} width="13.34px" height="11.6px" alt=""/>
                            Friends</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-image" viewBox="0 0 16 16">
                                <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z"/>
                            </svg>
                            Photos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <img src={settings} width="13.34px" height="11.6px" alt=""/>
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