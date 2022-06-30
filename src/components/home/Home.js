import React from 'react';
import postImage from '../../images/abstract-purple-digital-art-retrowave-wallpaper.png';
import comented from '../../images/commented.png';
import eye from '../../images/eye.svg';
import clock from '../../images/clock.svg';
import down from '../../images/down.svg';
import user from '../../images/user.png';
import twitter from '../../images/twitter.svg';
import navigation from '../../images/Unionnavigation.png';
import balance from '../../images/balance.svg';
import connectionns from '../../images/connectionns.svg';
import friend from '../../images/friends.svg';
import events from '../../images/events.svg';
import settings from '../../images/settings.png';
import iconUser from '../../images/user.svg';
import telegram from '../../images/telegram.svg';
import hh from '../../images/hh.ru__min.svg'
import { useNavigate } from "react-router-dom";

function Home() {

      return (
        <div className='container'>
          <div className='wr'>
          <div className="row">
			      <div className="col">
                <div className="wrapper">
                    <div className="post">
                        <img src={postImage} className="posImage" alt="post"/>
                        <div className="description"><img src={comented} className="commented" alt="chat" width="16px" height="15.02px"/>
                            <a href="/">Jason Anderson</a> commented:
                            <blockquote className="bg-gray primary">
                            <p> Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. – Jason, 10:30 am</p>
                            </blockquote>
                            <ul className="list-inline">
                                <li className="list-inline-item"><img className="info" src={eye} alt="u"/>432</li>
                                <li className="list-inline-item"><img className="info" src={comented} alt="u"/>47</li>
                            </ul>
                            
                        </div>
                    </div>
                    <ul className="list-group list-group-flush post postelements" >
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Sunset Sunset Sunset
                          <span className="badge badge-primary badge-pill">
                                <img className="info" src={clock} alt="u" />
                                <span className="info">53 minutes ago</span>
                                <img src={down} alt="u"/>
                          </span>
                        </li>
                    </ul>
                    <ul className="list-group list-group-flush post postelements">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Morning of Siberia
                          <span className="badge badge-primary badge-pill">
                            <img className="info" src={clock} alt="u" />
                            <span className="info">53 minutes ago</span>
                            <img src={down} alt="u"/>
                          </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-3">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src={user} alt="Admin" className="rounded-circle" width="150px"/>
                      <div className="mt-3">
                        <h4>Hanna Dorman</h4>
                        <p className="text-secondary mb-1">UX/UI designer</p>
                        <div className="social social_share">
                          <a href="/" className="social__item"><img src={telegram} width="19.38.px*2" height="19.38px" alt="tg"/></a>
                          <a href="#" class="social__item"><img src={hh} width="19.38.px*2" height="19.38px" alt="tg"/></a>
                          <a href="/" className="social__item"><img src={twitter} width="19.38.px" height="19.38px" alt="twitter"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center navigation">
                        Navigation
                        <span className="badge badge-primary badge-pill">
                            <img src={navigation} alt="u"/>
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="wrap">
                            <img className="info" src={iconUser} alt="u"/>
                            My profile
                        </div>
                        <span className="badge badge-primary badge-pill"></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="wrap">
                            <img className="info" src={balance} alt="b"/>
                            Balance
                        </div>
                        <span className="badge badge-primary badge-pill balance">$ 1,430</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="wrap">
                            <img className="info" src={connectionns} alt="c"/>
                            Connections
                        </div>
                        <span className="badge badge-primary badge-pill connections">29</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center navigation">
                        <div className="wpap">
                            <img className="info" src={friend} alt="f"/>
                            Friends
                        </div>
                        <span className="badge badge-primary badge-pill"></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="wrap">
                            <img className="info" src={events} alt="e"/>
                            Events
                        </div>
                        <span className="badge badge-primary badge-pill events">45</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="wrap">
                            <img className="info" src={settings} alt="s"/>
                            Account settings
                        </div>
                        <span className="badge badge-primary badge-pill"></span>
                      </li>
                    </ul>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center navigation">
                        Share your thoughts
                        <span className="badge badge-primary badge-pill">
                            <img src={navigation}/>
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <form>
                        <div class="form-group">
                          <label>
                            <input type="text" class="form-control form" name="name"  value="Enter your message..."/>
                          </label>
                          </div>
                          <input type="submit" class="btn btn-primary btn" value="Save" />
                      </form>
                    </li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
          </div>
        </div> 
    );
  }
 
  export default Home;