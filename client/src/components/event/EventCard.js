import React, { Component } from 'react';

class EventCard extends Component {
    
   
 

     


    render() {


        return (
            <div className="">
                <div className="container">
                    <div className="row">
                               <li> {this.props.event.title} {this.props.event.date}</li>




                    </div>
                </div>
            </div>


        );
    }
}

export default EventCard;