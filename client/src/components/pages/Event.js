import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles.scss';

import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';
import EventDetailsSingle from "../event/SingleEventDisplay/EventDetailsSingle";
import FormEventSingle from "../event/SingleEventDisplay/EventForumSingle";
import EventCards from "../event/EventCards";
import EventPhotosSingle from "../event/SingleEventDisplay/EventPhotosSingle";
class Event extends Component {
    render() {
        return (
            <div className="app-container">

                <div className="row">
                    <div className="col-md-12">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Navbar />
                        </header>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">

                    <div className="col-md-9">

                        <div className="row">
                            <EventDetailsSingle />
                        </div>
                        <div className="row">
                            <FormEventSingle />
                        </div>
                        <div className="row">
                            <EventCards />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <EventPhotosSingle />
                    </div>
                </div>


            </div >
        );
    }
}

export default Event;