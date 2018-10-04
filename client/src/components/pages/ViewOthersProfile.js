import React, { Component } from 'react';
import logo from '../../logo.svg';
// import '../../styles.scss';


import DisplayEvents from "../event/DisplayEvents";
import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';
import auth from "../modules/Auth";
import DisplayOthersProfile from '../ViewOthersProfile/DisplayOthersProfile';



class Profile extends Component {
    constructor(props) {
        super(props);
    
     
    
        //   this.updateEventList = this.updateEventList.bind(this);
    
        // this.getEventDetails = this.getEventDetails.bind(this);
        this.auth = new auth();
        // this.getToken = this.getToken.bind(this);
    }
    // getToken(){
    //     let token =;
        

    //     console.log(token + "this is the user id");
    // };
 
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
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-md-4">
                        <br />
                        <h1>Profile</h1>
                        <DisplayOthersProfile />

                    </div>
                    <div className="col-md-4">
                    <br />
                    <h1>Skills</h1>

                    </div>


                </div>
                <div className="row">
                    <div className="col-md-8">
                        <br />
                        <h1>Upcoming Events</h1>
                         <DisplayEvents />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;