import React, { Component } from 'react';
import EventCards from "./EventCards";
import axios from 'axios';
import EventDropDown from "./EventDropDown";


class DisplayEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: []
    };

      this.updateEventList = this.updateEventList.bind(this);

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


            <EventCards />
            })

            }


          </div>
            <div className="row">
            <EventDropDown updateEventList={this.updateEventList.bind(this)}/>
            </div>

        </div>


      </div>


    );
  }
}

export default DisplayEvents;