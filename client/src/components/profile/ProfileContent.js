import React, { Component } from 'react';
import axios from 'axios';
import EditProfileDropDown from "../profile/EditProfileDropDown"

class ProfileContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                address: {
                    city: "",
                    state: ""
                },
                age: "",
                gender: "",
                gitHub: "",
                linkedIn: "",
                events: {
                    attended: "",
                    registered: ""
                }
            }
        };


        // this.getEventDetails = this.getEventDetails.bind(this);

    }
    //handles input values of form


    // componentDidMount() {
    //     axios.get("api/profile")
    //         .then(res => {
    //             console.log(res.data);
    //             this.setState({ profile: res.data });
    //         })
    // }

    // updateEventList() {
    //     axios.get("api/profile")
    //         .then(res => {
    //             console.log(res.data);
    //             this.setState({ profile: res.data });
    //         })
    // };


    render() {


        return (
            <div className="">
                <div className="container">
                    <div className="row">

                        <br />
                      <EditProfileDropDown />

                    


                    </div>


                </div>


            </div>


        );
    }
}

export default ProfileContent;