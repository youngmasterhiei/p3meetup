import React, { Component } from 'react';
import EventCard from "./EventCard";
import axios from 'axios';


class PopularEvents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: []
        };


        // this.getEventDetails = this.getEventDetails.bind(this);

    }
    //handles input values of form


    componentDidMount() {
        axios.get("api/events")
            .then(res => {
                console.log(res.data);
                this.setState({ event: res.data });
            })
    }

    updateEventList() {
        axios.get("api/events")
            .then(res => {
                console.log(res.data);
                this.setState({ event: res.data });
            })
    };


    render() {


        return (

            <div className="container-fluid margin_80_0">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>Popular Events</h2>
                    <p>something catchy here is we want to add it</p>
                </div>
                <div id="reccomended" className="owl-carousel owl-theme">
                    {/*<ul> {this.state.event.map((event) => {*/}
                    {/*return <EventCards event={event} key={event.id}*/}
                    {/*/>*/}
                    {/*})*/}


                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />



                   
                    <hr className="large" />
                </div>
            </div>






        );
    }
}

export default PopularEvents;