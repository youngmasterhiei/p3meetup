import React, { Component } from 'react';
import axios from "axios";

class DisplayProfile extends Component {


    constructor(props) {
        super(props);

        this.state = {
            profile: [],
            id: localStorage.getItem('token')

        };

        //   this.updateEventList = this.updateEventList.bind(this);

        // this.getEventDetails = this.getEventDetails.bind(this);

    }


componentDidMount() {
    let id = this.state.id
    
    axios.get("api/profile/" +id)
        .then(res => {
            console.log(res.data);
            console.log(this.state.profile);

            this.setState({ profile: res.data });
            console.log(this.state.profile);

        })
}

// First Name: {this.state.profile.firstName}
// <br /> Last Name: {this.state.profile.lastName}

render() {


    return (
        <div className="">
            <div className="container">
                <div className="row">

                    <li>
                       
                        <br /> City: {this.state.profile.city}
                        <br /> State: {this.state.profile.state}
                        <br /> Age: {this.state.profile.age}
                        <br /> Gender: {this.state.profile.gender}
                        <br /> GitHub: {this.state.profile.gitHub}
                        <br /> LinkedIn: {this.state.profile.linkedIn}
                    </li>



                </div>
            </div>
        </div>


    );
}
}

export default DisplayProfile;