import React, { Component } from 'react';
import "../../App.css";

class Navbar extends Component {



    render() {


        return (
            <div className="">
                <ul className="Nav-links">
                    <li><a href={"/home"}>Home</a></li>
                    <li><a href={"/about"}>About</a></li>
                    <li><a href={"/events"}>Events</a></li>
                    <li><a href={"/forum"}>Forum</a></li>
                </ul>
            </div>


        );
    }
}

export default Navbar;