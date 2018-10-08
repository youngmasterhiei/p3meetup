import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';
import JoinEvent from "./JoinEvent";


class EventDetailsSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: "",
            isInEditMode: false,
            id: localStorage.getItem('event_id'),
            userId: localStorage.getItem('token'),
            creatorId: "",
            title: "",
            summary: "",
            time: "",
            max_attend: "",
            age_min: "",
            addr1: "",
            city: "",
            state: "",
            date: ""


        };
    }

    editButtonFunction = () => {
        this.setState({
            isInEditMode: true
        })
    }

    changeEditMode = () => {
        let event = this.state.event;
        this.setState({
            isInEditMode: !this.state.isInEditMode,
            title: event.event_title,
            summary: event.summary,
            time: event.time,
            max_attend: event.max_attend,
            age_min: event.age_min,
            addr1: event.addr1,
            city: event.city,
            state: event.state,
            date: event.date

        })
    }

    handleInputChange = event1 => {
        const { name, value } = event1.target;

        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        let id = this.state.id
        console.log("This is the ID: " + id)
        let data = [];

        axios.get("/auth/api/events/" + id)
            .then(res => {

                console.log("this is what we get: " + res.data[0])
                let event = res.data[0];

                this.setState({
                    creatorId: event.creator_user_id,
                    title: event.event_title,
                    summary: event.summary,
                    time: event.time,
                    max_attend: event.max_attend,
                    age_min: event.age_min,
                    addr1: event.addr1,
                    city: event.city,
                    state: event.state,
                    date: event.date
                });
                console.log("is this---- " + event.creator_user_id + "the same as--- " + this.state.creatorId + "???")


            })

    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
        })

        let id = this.state.id
        let updatedEvent = {
            // firstName: this.state.firstName,
            // lastName: this.state.lastName,
            title: this.state.title,
            summary: this.state.summary,
            time: this.state.time,
            max_attend: this.state.max_attend,
            age_min: this.state.age_min,
            addr1: this.state.addr,
            city: this.state.city,
            state: this.state.state,
            date: this.state.date

        };

        // create an AJAX request
        axios({
            method: 'put',
            url: '/auth/api/event/' + id,
            data: updatedEvent,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);

            });

    };


    isUserCreator(result) {
        if (this.state.userId === this.state.creatorId) {
            result = true;
            console.log(result)
        }
        else {
            result = false;
        }
    }


    renderDefaultView = () => {



        let button;

        if (this.state.userId === this.state.creatorId) {
            button = <Button color="success" size="md" className="waves-light " onClick={this.editButtonFunction}>Edit Event Details</Button>
             ;
        } else {
            button = <JoinEvent />

        }



        return (
            <Container>
                <Row>
                    <Col lg="5">
                        <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                    <Col lg="7">
                        <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Food</h6></a>
                        <h3 className="font-weight-bold mb-3 p-0"><strong>{this.state.event.event_title}</strong></h3>
                        <ul>
                            <li>
                                <br /> <li> <strong> {this.state.title} </strong>  </li>
                                <br /> <li> Summary: {this.state.summary} </li>

                                <br /> Max Attendance: {this.state.max_attend}
                                <br /> Age Min: {this.state.event.age_min}
                                <br /> Date: {this.state.date}
                                <br /> Time: {this.state.time}
                                <br /> Address: {this.state.addr1}
                                <br /> City: {this.state.city}
                                <br /> State: {this.state.state}
                                <br /> Location Name: {this.state.location_name}

                            </li>

                        </ul>

                        <p>by <a><strong>Creator</strong></a>, 19/08/2018</p>

                                    {button}



                    </Col>
                </Row>

            </Container>


        );

    }

    renderEditView = () => {
        return (
            <Container>
                <Row>
                    <Col lg="5">
                        <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                    <Col lg="7">
                        <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Food</h6></a>
                        <h3 className="font-weight-bold mb-3 p-0"><strong>{this.state.event.event_title}</strong></h3>
                        <ul>
                            <li>
                                <br /> <li> <strong><input type="text" defaultValue={this.state.event_title} onChange={this.handleInputChange} name="summary" /></strong></li>

                                <br /> <li> Summary: <input type="text" defaultValue={this.state.summary} onChange={this.handleInputChange} name="summary" /></li>


                                <br /> Max Attendance: <input type="text" defaultValue={this.state.max_attend} onChange={this.handleInputChange} name="max_attend" />
                                <br /> Age Min: <input type="text" defaultValue={this.state.age_min} onChange={this.handleInputChange} name="age_min" />
                                <br /> Date: <input type="text" defaultValue={this.state.date} onChange={this.handleInputChange} name="date" />
                                <br /> Time: <input type="text" defaultValue={this.state.time} onChange={this.handleInputChange} name="time" />
                                <br /> Address: <input type="text" defaultValue={this.stateaddr1} onChange={this.handleInputChange} name="addr1" />
                                <br /> City: <input type="text" defaultValue={this.state.city} onChange={this.handleInputChange} name="city" />
                                <br /> State: <input type="text" defaultValue={this.state.state} onChange={this.handleInputChange} name="state" />
                                <br /> Location Name: <input type="text" defaultValue={this.state.location_name} onChange={this.handleInputChange} name="location_name" />

                            </li>

                        </ul>
                        <button onClick={this.changeEditMode}> X </button>
                        <button onClick={this.updateComponentValue}> OK </button>

                        <p>by <a><strong>Creator</strong></a>, 19/08/2018</p>
                    </Col>
                </Row>

            </Container>


        );

    }

    render() {
        return this.state.isInEditMode ?
            this.renderEditView() :
            this.renderDefaultView()

    }
}

export default EventDetailsSingle;