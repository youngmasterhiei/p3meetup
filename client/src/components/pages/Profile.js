import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles.scss';
import EditProfileDropDown from "../profile/EditProfileDropDown";
import DisplayProfile from "../profile/DisplayProfile";

import DisplayEvents from "../event/DisplayEvents";
import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';


class Home extends Component {
    render() {
        return (
            <div className="App">

                <div className="row">
                    <div className="col-md-12">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Navbar />
                        </header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} className="App-logo" alt="logo" />
                        <EditProfileDropDown />
                    </div>
                    <div className="col-md-4">
                        <br />
                        <h1>Profile</h1>
                        <DisplayProfile />

                    </div>
                    <div className="col-md-4">
                    <br />
                    <h1>Skills</h1>

                    </div>


                </div>
                <div className="row">
                    <div className="col-md-8">
                        <br />
                        <h1>Upcoming Events</h1>
                        <DisplayEvents />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
