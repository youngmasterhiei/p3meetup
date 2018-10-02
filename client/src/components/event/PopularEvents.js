import React, { Component } from 'react';
import EventCards from "./EventCards";
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
            <div className="">
                <div className="container">
                    <div className="row">

                        <h2>Popular Events</h2>
                        <br />
                        <br />
                        <br />

                        <ul> {this.state.event.map((event) => {
                            return <EventCards event={event} key={event.id}
                            />
                        })

                        }
                        </ul>


                    </div>


                </div>


            </div>


        );
    }
}

export default PopularEvents;