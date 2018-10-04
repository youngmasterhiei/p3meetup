import React, { Component } from 'react';
import axios from "axios";

class DisplayOthersProfile extends Component {


    constructor(props) {
        super(props);

        this.state = {
            profile: [],
            username: localStorage.getItem('username')

        };

        //   this.updateEventList = this.updateEventList.bind(this);

        // this.getEventDetails = this.getEventDetails.bind(this);

    }


componentDidMount() {
    let username = this.state.username
    console.log(username + "id check");
 
    
    axios.get("/auth/api/user/" +username)
        .then(res => {
            console.log(res.data);

            this.setState({ profile: res.data });

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
                        <br /> GitHub: {this.state.profile.github}
                        <br /> LinkedIn: {this.state.profile.linkedin}
                    </li>



                </div>
            </div>
        </div>


    );
}
}

export default DisplayOthersProfile;