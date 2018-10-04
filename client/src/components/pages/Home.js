import React, { Component } from 'react';
//import logo from '../../logo.svg';
import '../../styles.scss';
//import 'jquery';


//import '../../js/common_scripts';
//import '../../js/main.js';



//import LoginForm from "../login/LoginForm";


import SignUpForm from "../login/SignUpForm";
import LoginForm from "../login/LoginForm";
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

    render() {
        return (

            <div className="home">

            <Navbar />
            <HeroSearch />
            <PopularEvents />




            </div>








        );
    }
}

export default Home;



