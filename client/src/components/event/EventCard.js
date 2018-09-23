import React, { Component } from 'react';
import axios from 'axios';

class EventCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {

                title: "",
                description: "",
                date: "",
                time: "",
                address: "",
                name: "",
                image: ""



            }
        };


        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);

    }
    //handles input values of form
    handleEventChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    //Form submit and axios post to DB
    handleEventSubmit = event => {
        event.preventDefault();

        let eventInfo = {
            title: eventInfo.title,
            description: eventInfo.description,
            date: eventInfo.date,
            time: eventInfo.time,
            address: this.state.address,
            name: eventInfo.name,
            image: eventInfo.image

        };
        console.log(eventInfo);
        axios({
            method: 'Get',
            url: '/api/events',
            data: eventInfo,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);

            });
        this.setState({
            title: eventInfo.title,
            description: eventInfo.description,
            date: eventInfo.date,
            time: eventInfo.time,
            address: this.state.address,
            name: eventInfo.name,
            image: eventInfo.image

        });
    };





    render() {


        return (
            <div className="">
                <div className="container">
                    <div className="row">
                            <h4>{title}</h4>
                            <h2>{date}</h2>


                    </div>
                </div>
            </div>


        );
    }
}

export default EventCard;