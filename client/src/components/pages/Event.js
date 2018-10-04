import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles.scss';

import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';
import EventDetailsSingle from "../event/SingleEventDisplay/EventDetailsSingle";
import FormEventSingle from "../event/SingleEventDisplay/EventForumSingle";
import PopularEvents from "../event/PopularEvents";
import EventCard from "../event/EventCard";
import EventPhotosSingle from "../event/SingleEventDisplay/EventPhotosSingle";
import EventDropDown from "../event/EventDropDown";
class Event extends Component {

    
    render() {
        return (
            <div className="app-container">

                <div className="row">
                    <div className="col-md-12">
                        <header className="App-header">
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
                        <EventDropDown />

        {/*   <FormEventSingle />     */}
                        </div>
                        <div className="row">
                            <PopularEvents />
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
