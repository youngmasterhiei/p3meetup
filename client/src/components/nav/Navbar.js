import React, { Component } from 'react';
import "../../styles.scss";
import SignUpForm from "../login/SignUpForm";

class Navbar extends Component {



    render() {


        return (
            <header className="header mm-slideout sticky">
            <div id="logo">
                <a href={"/"}>
            <h1 className="primary-navigation">
            codeUP
            </h1>

            </a>
            </div>
                <ul id="top_menu">

            <li><a href="#sign-in-dialog" id="sign-in" title="Sign In">Sign In</a></li>
        <SignUpForm />
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
                        <li><span><a href={"/home"}>Home</a></span></li>
                        <li><span><a href={"/about"}>About</a></span></li>
                        <li><span><a href={"/profile"}>Events</a></span></li>
                        <li><span><a href={"/event"}>Events</a></span></li>
                        <li><span><a href={"/forum"}>Events</a></span></li>

                    </ul>
                </nav>
            </header>






        );
    }
}

export default Navbar;