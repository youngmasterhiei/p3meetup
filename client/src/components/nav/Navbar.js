import React, { Component } from 'react';
import "../../styles.scss";
import SignUpForm from "../login/SignUpForm";
import LogoutFunction from "../login/LogoutFunction";

class Navbar extends Component {



    constructor(props) {
        super(props);
    
        // this.state = {
        //     auth: false
        // };
        // this.handleChange = this.handleChange.bind(this);
        // this.checkUser = this.checkUser.bind(this);
        
      }
    
    
    // checkUser(){
    //     console.log("hello");

    //     let isUserLogged = localStorage.getItem("token");
    //     console.log(isUserLogged)

    //     if(isUserLogged === null){
    //         this.setState({
    //             auth: false
    //           })
    //           console.log(this.state.auth)
    //     }
    //     else {
    //         this.setState({
    //             auth: true
    //           })
    //           console.log(this.state.auth)

    //     }
     
    //   };
    
      //sets list open state to true or false on click
  

      

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

        <SignUpForm   /> 
        <LogoutFunction />


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
                        <li><span><a href={"/profile"}>Profile</a></span></li>
                        <li><span><a href={"/forum"}>Forum</a></span></li>

                    </ul>
                </nav>
            </header>






        );
    }
}

export default Navbar;











