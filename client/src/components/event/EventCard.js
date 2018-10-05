import React, { Component } from 'react';

class EventCard extends Component {
    

    constructor(props) {
        super(props);
    
        this.state = {
          
        };
    
        this.storeTitle = this.storeTitle.bind(this);
    
        // this.getEventDetails = this.getEventDetails.bind(this);
    
      }


 
storeTitle(){
    localStorage.setItem('event_id', this.props.event.id);

}
    


    render() {


        return (
            <div className="item">
                <div className="box_grid">
                    <figure>
                        <a href="#0"><img src="http://placehold.it/400x267" className="img-fluid" alt="ss" width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small>Event Type</small>
                    </figure>
                    <div className="wrapper">
                        <h3 ><a onClick={this.storeTitle} href="/event">{this.props.event.event_title}</a></h3>
                        
                        <p>{this.props.event.summary}</p>
                        <span className="event_date"><strong></strong> </span>
                    </div>
                    <ul>
                        <li><small>{this.props.event.time}</small>
                        </li><li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="event_attaendes"><span>Event<em>Attendees</em></span><strong>7</strong></div></li>
                    </ul>
                </div>
            </div>









        );
    }
}

export default EventCard;