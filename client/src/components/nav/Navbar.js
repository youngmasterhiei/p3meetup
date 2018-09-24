import React, { Component } from 'react';
import "../../App.css";

class Navbar extends Component {



    render() {


        return (
            <div className="">
                <ul className="">
                    <li className="Nav-links"><a href={"/home"}>Home</a></li>
                    <li className="Nav-links"><a href={"/about"}>About</a></li>
                    <li className="Nav-links"><a href={"/profile"}>Profile</a></li>
                    <li className="Nav-links"><a href={"/forum"}>Forum</a></li>
                </ul>
            </div>


        );
    }
}

export default Navbar;