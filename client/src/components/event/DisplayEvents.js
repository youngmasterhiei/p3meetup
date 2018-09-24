import React, { Component } from 'react';
import EventCard from "./EventCard";
import axios from 'axios';


class DisplayEvents extends Component {
  constructor(props) {
    super(props);

 this.state = {
   event: []
 };


    // this.getEventDetails = this.getEventDetails.bind(this);

}
//handles input values of form


componentDidMount(){
  axios.get("api/events")
  .then(res => {
    console.log(res.data);
    this.setState({event: res.data});
  })
}

updateEventList(){
  axios.get("api/events")
  .then(res => {
    console.log(res.data);
    this.setState({event: res.data});
  })
};


  render() {
 

    return (
      <div className="">
        <div className="container">
        <div className="row">
        

        <ul> {this.state.event.map((event) => {
          return <EventCard event={event} key={event.id} 
          / >
        })

      }
      </ul>


        </div>


        </div>

       
      </div>
      

    );
  }
}

export default DisplayEvents;