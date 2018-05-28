import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Requestion from '../src/components/Requestion';
// import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      userInfo: {},
    };
  }

  componentDidMount() {
    
    window.fbAsyncInit = function() {
      window.FB.init({
        appId       : '572495833129478',
        cookie      : true,
        xfbml       : true,
        version     : 'v2.1' 
      });

      let userInfo = {};

      window.FB.Event.subscribe('auth.statusChange', response => {
        // console.log('subscritbe response', response)
        userInfo.token = response.authResponse.accessToken;
        userInfo.signedRequest = response.authResponse.signedRequest;
  
        if(response.authResponse) {
          fetch(`https://graph.facebook.com/me?access_token=${userInfo.token.toString()}`)
            .then(res =>res.json())
            .then(res => {
              console.log('res 1', res);
              userInfo.name = res.name;
              userInfo.userId = res.id;
            })
            .then(() => {
              fetch(`https://graph.facebook.com/${userInfo.userId}/picture?type=square`)
                .then(res => {
                    userInfo.profileURL = res.url;
                    console.log('userInfo', userInfo);
                    // redux state change 
                    // 2018-03-22 박현도
                    this.updateLoggedInState(userInfo);
                })
                .catch(err => {
                    console.log('error!', err);
                })
            })
            .catch(err => {
              console.log('error!', err);
            })
        }
        else {
          this.updateLoggedOutState();
        }
      });

    }.bind(this);

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.0&appId=126674078143022&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  updateLoggedInState(userInfo) {
    console.log('Logged In', userInfo);
    this.setState(state => ({
      ...state,
      userInfo: userInfo,
      logged: true,
    }));
  }

  updateLoggedOutState() {
    console.log('Logged Out');
    this.setState({ logged: false });
  }

  render() {
    const { logged, userInfo } = this.state;
    // console.log('logged status change', logged);
    return (
      <Router>
        {
          ( logged === true ) ? (
              <Requestion userInfo={this.state.userInfo}/>
          ) : (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">LOT 점주님 페이지</h1>
              </header>
              <p className="App-intro">
                먼저 페이스북으로 로그인하세요.
              </p>
              <div className="fb-login-button" data-width="100" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
            </div>
          )
        }
      </Router>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;