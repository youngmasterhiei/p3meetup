import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import EditProfileDropDown from "../profile/EditProfileDropDown"

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
                            <h1>Profile</h1>

                        </div>
                        <div className="col-md-4">

                        </div>

                    
                </div>
            </div>
        );
    }
}

export default Home;
