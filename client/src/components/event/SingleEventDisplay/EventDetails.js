import React, { Component } from 'react';
import axios from 'axios';


class EventDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            

        };



    }




    render() {


        return (
            <div className="">

                <form onSubmit={this.handleEventSubmit} >
                    <h1>Create an Event</h1>
                    <label>Title: </label>
                    <input className="InputField" type="text" name="title" value={this.state.email}  placeholder="hello"></input>

                    <label>Description: </label>
                    <input className="InputField" type="text" name="description" value={this.state.description} onChange={this.handleEventChange}></input>

                    <label>Date: </label>
                    <input className="InputField" type="text" name="date" value={this.state.date} onChange={this.handleEventChange}></input>


                    <label>Time: </label>
                    <input className="InputField" type="text" name="time" value={this.state.time} onChange={this.handleEventChange}></input>


                    <label>Address: </label>
                    <input className="InputField" type="text" name="address" value={this.state.address} onChange={this.handleEventChange}></input>


                    <label>Name: </label>
                    <input className="InputField" type="text" name="name" value={this.state.name} onChange={this.handleEventChange}></input>


                    <label>image: </label>
                    <input className="InputField" type="text" name="image" value={this.state.image} onChange={this.handleEventChange}></input>




                    <button type="submit" >Submit</button>
                </form>
            </div>


        );
    }
}

export default EventDetails;