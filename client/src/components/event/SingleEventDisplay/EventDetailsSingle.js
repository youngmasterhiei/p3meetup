import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';


class EventDetailsSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: [],
            id: localStorage.getItem('event_id')

        };
    }


    componentDidMount() {
        let id= this.state.id
        let data = [];

        axios.get("/auth/api/events/" +id)
            .then(res => {
                this.setState({ event: res.data[0] });
            })
        
    }

    render() {


        return (
            <Container>
      <Row>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
        <Col lg="7">
            <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Food</h6></a>
            <h3 className="font-weight-bold mb-3 p-0"><strong>{this.state.event.event_title}</strong></h3>
<ul>
<li>
                       
<br /> <li> Summary: {this.state.event.summary} </li>

<br /> Max Attendance: {this.state.event.max_attend}
<br /> Age Min: {this.state.event.age_min}
<br /> Date: {this.state.event.date}
<br /> Time: {this.state.event.time}
<br /> Address: {this.state.event.addr1}
<br /> City: {this.state.event.city}
<br /> State: {this.state.event.state}
<br /> Location Name: {this.state.event.location_name}

</li>

</ul>

            <p>by <a><strong>Creator</strong></a>, 19/08/2018</p>
            <Button color="success" size="md" className="waves-light ">Edit Event Details</Button>
        </Col>
      </Row>
      
    </Container>


        );
    }
}

export default EventDetailsSingle;