import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';


class EventDetailsSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            

        };



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
            <h3 className="font-weight-bold mb-3 p-0"><strong>Event Title</strong></h3>
<ul>
<li>Where:</li>
<li>When:</li>
<li>Type:</li>

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