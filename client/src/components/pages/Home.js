import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles.scss';


import SignUpForm from "../login/SignUpForm";
import LoginForm from "../login/LoginForm";
import LogoutFunction from '../login/LogoutFunction.jsx';

import Auth from '../modules/Auth';
import PropTypes from 'prop-types';


import DisplayEvents from "../event/DisplayEvents";
import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';

import HeroSearch from "../features/HeroSearch";
import AboutSection from "../features/AboutSection";
import PopularEvents from "../event/PopularEvents";






class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
    Auth.deauthenticateUser();


  }



  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {




    return (
      <div className="app-container">
        <div className="row">
          <div className="col-md-8">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Navbar />
            </header>
            <div className="row App-header">
              <HeroSearch />
          {Auth.isUserAuthenticated() ? (
            <h1 style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</h1>
          ) : (
            <h1 style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</h1>

            
          )}

          <div className="">

          <li className="Nav-links"><a href={"/home"}>Logout</a></li>
          </div>
            </div>
          </div>
          <div className="col-md-4">
            <LoginForm toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}/>
            <br />
            <SignUpForm />
          </div>
        </div>
        <div className="row">
          <DisplayEvents />
        </div>
        <div className="row">

        </div>
        <div className="row">
          <div className="col-md-3">
          </div>

          <div className="col-md-6">

            <AboutSection />

          </div>

          <div className="col-md-3">
          <PopularEvents />
          </div>

        </div>

      </div>
    );
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Home;
