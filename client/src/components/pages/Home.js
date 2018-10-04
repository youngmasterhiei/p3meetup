import React, { Component } from 'react';
//import logo from '../../logo.svg';
import '../../styles.scss';
//import 'jquery';


//import '../../js/common_scripts';
//import '../../js/main.js';



//import LoginForm from "../login/LoginForm";


// import SignUpForm from "../login/SignUpForm";
// import LoginForm from "../login/LoginForm";
import LogoutFunction from '../login/LogoutFunction.jsx';

import Auth from '../modules/Auth';
import PropTypes from 'prop-types';


//import DisplayEvents from "../event/DisplayEvents";
import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';

import HeroSearch from "../features/HeroSearch";
//import AboutSection from "../features/AboutSection";
import PopularEvents from "../event/PopularEvents";
//import SignUpForm from "../login/SignUpForm";







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

            <div className="home">

            <Navbar toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <HeroSearch />
            <PopularEvents />
            <div className="container">
            <p className="btn_home_align"><a href="#0" className="btn_1 rounded">View all Events</a></p>
        </div>



            </div>








        );
    }
}

LogoutFunction.contextTypes = {
    router: PropTypes.object.isRequired
  };


export default Home;



