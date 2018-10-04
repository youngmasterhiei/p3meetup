import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';


class EventDiscussionBox extends Component {
    constructor(props) {
        super(props);

        this.state = {


        };



    }




    render() {


        return (
            <Container>
            <li>  {this.props.event.username} : {this.props.event.comments}</li>


            </Container>


        );
    }
}

export default EventDiscussionBox;