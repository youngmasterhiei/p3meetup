import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';


class EventDiscussionBox extends Component {
    constructor(props) {
        super(props);

        this.state = {


        };

this.findUser = this.findUser.bind(this);
this.viewProfile = this.viewProfile.bind(this);


    }
    // shouldComponentUpdate(newProps) {
    //    
    //   }
    findUser(userId) {

        axios.get("/auth/api/user/" + this.props.getPost.poster_user_id)
            .then(res => {
                console.log(res.data);
                this.setState({

                    user: res.data

                });
                console.log(res.data)
            })

      };

      viewProfile() {
        let id = this.props.getPost.poster_user_id;

         localStorage.setItem('profileId', id)


      };
      
    //   {this.props.getPost.poster_user_id}

    render() {

        return (
            <Container>


                               <a onClick = {this.viewProfile} href={"/profile/user"}>{this.props.getPost.poster_user_id}</a><li> {this.props.getPost.title} </li>
                               <li> {this.props.getPost.content}</li>

            </Container>


        );
    }
}

export default EventDiscussionBox;