import React, { Component } from 'react';
import axios from "axios";



class JoinEvent extends Component {


    constructor(props) {
        super(props);

        this.state = {

            user_id: localStorage.getItem("token"),
            event_id: localStorage.getItem("event_id"),
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleEventSignup = this.handleEventSignup.bind(this);
        // this.handlePostChange = this.handlePostChange.bind(this);
        // this.updateDiscussion = this.updateDiscussion.bind(this);
    }



    handlePostChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handleEventSignup = event => {


    };


    componentDidMount() {




    }







    render() {


        return (
            <div>
                <h4>People Attending: </h4>

                <button>Signup for Event</button>
            </div>
        );
    }
}

export default JoinEvent;