import React, { Component } from 'react';
import "../../styles.scss";
import SignUpForm from "../login/SignUpForm";


class Navbar extends Component {



    render() {


        return (
           <header>
            <ul id="top_menu">
                <SignUpForm />
                <li><a href="#sign-in-dialog" id="sign-in" title="Sign In">Sign In</a></li>
    </ul>
    <a href="#menu" className="btn_mobile">
            <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
            <div className="hamburger-inner" />
            </div>
            </div>
            </a>
            <nav id="menu" className="main-menu">
            <ul>
                <li><span><a href="#0">Home</a></span></li>
                <li><span><a href="#0">About</a></span></li>
                 <li><span><a href="#0">Events</a></span></li>
            </ul>
        </nav>
        </header>






        );
    }
}

export default Navbar;