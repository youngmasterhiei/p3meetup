import React, { Component } from 'react';

class EventCard extends Component {
    
   
 

    


    render() {


        return (
            <div className="item">
                <div className="box_grid">
                    <figure>
                        <a href="#0"><img src="http://placehold.it/400x267" className="img-fluid" alt="ss" width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small>Event Type</small>
                    </figure>
                    <div className="wrapper">
                        <h3><a href="#0">Event title</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span className="event_date">Event Date: <strong>08/18/18</strong> </span>
                    </div>
                    <ul>
                        <li><small>Event Start Time:</small>
                        </li><li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="event_attaendes"><span>Event<em>Attendees</em></span><strong>7</strong></div></li>
                    </ul>
                </div>
            </div>









        );
    }
}

export default EventCard;