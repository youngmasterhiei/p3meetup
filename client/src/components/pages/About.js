import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles.scss';

import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';


class Home extends Component {
    render() {
        return (
            <div className="app-container">

                <div className="row">
                    <div className="col-md-8">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Navbar />
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
