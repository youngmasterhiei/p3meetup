import React, { Component } from 'react';
import EventCard from "./EventCard";
import axios from 'axios';
import EventDropDown from "./EventDropDown";
import PopularEvents from './PopularEvents';


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
      // <div className="">
      //   <div className="container">
      //     <div className="row">


      //       <PopularEvents />


      //     </div>
      //       <div className="row">
      //       <EventDropDown updateEventList={this.updateEventList.bind(this)}/>
      //       </div>

      //   </div>


      // </div>


<div className="container-fluid margin_30_95 pl-lg-5 pr-lg-5">
<section className="add_bottom_45">
  <div className="main_title_3">
    <span><em /></span>
    <h2>Popular Hackathons</h2>
    <p>add catchy phrase here</p>
  </div>
  <div className="row">
    <div className="col-xl-3 col-lg-6 col-md-6">
      <a href="#-" className="grid_item">
        <figure>
          <div className="score"><strong>8.9</strong></div>
          <img src="http://placehold.it/400x267" className="img-fluid" alt />
          <div className="info">
            <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
            <h3>Event Title</h3>
          </div>
        </figure>
      </a>
    </div>
    {/* /grid_item */}
    <div className="col-xl-3 col-lg-6 col-md-6">
      <a href="#-" className="grid_item">
        <figure>
          <div className="score"><strong>8.9</strong></div>
          <img src="http://placehold.it/400x267" className="img-fluid" alt />
          <div className="info">
            <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
            <h3>Event Title</h3>
          </div>
        </figure>
      </a>
    </div>
    {/* /grid_item */}
    <div className="col-xl-3 col-lg-6 col-md-6">
      <a href="#-" className="grid_item">
        <figure>
          <div className="score"><strong>8.9</strong></div>
          <img src="http://placehold.it/400x267" className="img-fluid" alt />
          <div className="info">
            <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
            <h3>Event Title</h3>
          </div>
        </figure>
      </a>
    </div>
    {/* /grid_item */}
    <div className="col-xl-3 col-lg-6 col-md-6">
      <a href="#-" className="grid_item">
        <figure>
          <div className="score"><strong>8.9</strong></div>
          <img src="http://placehold.it/400x267" className="img-fluid" alt />
          <div className="info">
            <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
            <h3>Event Title</h3>
          </div>
        </figure>
      </a>
    </div>
    {/* /grid_item */}
    {/* /row */}
    <a href="#0"><strong>View all (157) <i className="arrow_carrot-right" /></strong></a>
  </div></section>
{/* /section */}
</div>


    );
  }
}

export default DisplayEvents;