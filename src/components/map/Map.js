import React, { Component } from 'react';
import Head from '../Header/header';

class Map extends Component {
    render() {
      return (
        <div className='container'>
          <p class="title">Карта</p>
        </div>,
        <Head/>,
        <div class="content">
          <nav class="navbar navbar-expand-lg navbar-light bg">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item user_page">
                      <p class="slug">Timer</p> 
                  </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                  <li class="info">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.119629 1.56014C0.119629 1.38014 0.189628 1.21014 0.329628 1.08014C0.599628 0.840145 1.00963 0.860145 1.24963 1.12014L6.98993 7.48928L12.5399 1.08012C12.7799 0.810118 13.1899 0.800118 13.4599 1.04012C13.7199 1.28012 13.7399 1.69012 13.4999 1.96012L7.50993 8.85928C7.22993 9.16928 6.74993 9.16928 6.46993 8.85928L0.289627 2.00014C0.169627 1.87014 0.119629 1.72014 0.119629 1.56014Z" fill="#505050"/>
                      </svg>
                  </li>
                  <li class="info">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.1792 5.24908C9.04801 5.12583 8.97204 4.95842 8.97315 4.76737C8.98309 4.40626 9.27839 4.12113 9.63221 4.12423L11.7846 4.10802L11.795 4.09682C10.7462 3.28392 9.42962 2.80006 8 2.80006C4.57583 2.80006 1.8 5.57589 1.8 9.00006C1.8 9.18425 1.80803 9.36658 1.82377 9.54669C1.85289 9.88014 1.65987 10.2021 1.33927 10.2983C0.969648 10.4092 0.582034 10.1786 0.541611 9.79482C0.514104 9.53366 0.5 9.26851 0.5 9.00006C0.5 4.85792 3.85786 1.50006 8 1.50006C9.76425 1.50006 11.3862 2.10922 12.667 3.12868L12.4805 1.09227C12.4481 0.732479 12.7215 0.426809 13.0813 0.394348C13.4342 0.369175 13.7467 0.635321 13.7792 0.995108L14.0669 4.64683C14.1012 5.06315 13.7725 5.413 13.3549 5.40482L9.61629 5.42644C9.43938 5.42489 9.29582 5.35863 9.1792 5.24908Z" fill="#505050"/>
                          <path d="M6.29025 12.2936C6.42144 12.4169 6.49741 12.5843 6.49631 12.7753C6.48636 13.1365 6.19106 13.4216 5.83724 13.4185L3.68488 13.4347L3.67643 13.4438C4.7933 14.5306 6.31848 15.2001 8 15.2001C11.4242 15.2001 14.2 12.4242 14.2 9.00006C14.2 8.61802 14.1654 8.24405 14.0993 7.8811C14.0377 7.54303 14.2109 7.1961 14.5338 7.07867C14.8872 6.95017 15.2786 7.14513 15.3527 7.51375C15.4493 7.99417 15.5 8.49119 15.5 9.00006C15.5 13.1422 12.1421 16.5001 8 16.5001C5.98183 16.5001 4.14984 15.7029 2.8017 14.4063L2.98893 16.4504C3.02139 16.8102 2.74796 17.1159 2.38817 17.1484C2.03524 17.1735 1.72272 16.9074 1.69026 16.5476L1.40252 12.8959C1.3683 12.4796 1.69695 12.1297 2.1146 12.1379L5.85316 12.1163C6.03008 12.1178 6.17364 12.1841 6.29025 12.2936Z" fill="#505050"/>
                      </svg>
                  </li>
                  <li class="info">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.40942 0.490063C1.15558 0.236222 0.744026 0.236222 0.490185 0.490063C0.236344 0.743904 0.236344 1.15546 0.490185 1.4093L6.0808 6.99991L0.590648 12.4901C0.336807 12.7439 0.336808 13.1555 0.590649 13.4093C0.844489 13.6631 1.25605 13.6631 1.50989 13.4093L7.00004 7.91915L12.4902 13.4093C12.744 13.6631 13.1556 13.6631 13.4094 13.4093C13.6633 13.1555 13.6633 12.7439 13.4094 12.4901L7.91928 6.99991L13.5099 1.4093C13.7637 1.15546 13.7637 0.743904 13.5099 0.490063C13.256 0.236222 12.8445 0.236222 12.5906 0.490063L7.00004 6.08068L1.40942 0.490063Z" fill="#505050"/>
                      </svg>
                  </li>
              </ul>
          </nav>
          <div id="map-container-google-1" class="z-depth-1-half map-container">
              <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
              allowfullscreen></iframe>
          </div>
        </div>
      );
    }
  }
  

export default Map;