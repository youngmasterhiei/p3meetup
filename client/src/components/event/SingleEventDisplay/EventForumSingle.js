import React, { Component } from 'react';
import axios from "axios";
import { Container, Row, Col, Table, TableBody, TableHead } from 'mdbreact';
import EventDiscussionBox from "./EventDiscussionBox";


class EventForumSingle extends Component {


    constructor(props) {
        super(props);

        this.state = {


            title: "",
            content: "",
            poster_user_id: localStorage.getItem("token"),


            getPost: [],
            event_id: localStorage.getItem("event_id"),
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        this.updateDiscussion = this.updateDiscussion.bind(this);
    }



    handlePostChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handlePostSubmit = event => {
        event.preventDefault();


        let postInfo = {

            poster_user_id: this.state.poster_user_id,
            event_id: this.state.event_id,
            title: this.state.title,
            content: this.state.content


        };
        let id = this.state.event_id;
        console.log(postInfo);
        axios({
            method: 'post',
            url: '/auth/api/post/' + id,
            data: postInfo,
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
            this.updateDiscussion();
    };

    updateDiscussion() {
        let id = this.state.event_id

        axios.get("/auth/api/posts/" + id)
            .then(res => {
                console.log(res.data);
                this.setState({

                    getPost: res.data

                });
                console.log(this.state.getPost)
            })

      };





    componentDidMount() {
        let id = this.state.event_id

        axios.get("/auth/api/posts/" + id)
            .then(res => {
                console.log(res.data);
                this.setState({

                    getPost: res.data

                });
                console.log(this.state.getPost)
            })
    }

 


    render() {


        return (
            <Container style={{ maxWidth: '80%' }}>
                <Row>
                    <h1> Post to DiscussionBoard</h1>
                    <ul>
                    {this.state.getPost.map((getPost) => {
                        return <EventDiscussionBox getPost={getPost} key={getPost.id}
                        />
                    })

                    }
                    </ul>
                </Row>
                <Row>


                    <Row>



                    </Row>

                    <form onSubmit={this.handlePostSubmit} >
                        <div className="form-group text-center">

                            <label>Title: </label>
                            <br />
                            <input className="InputField" type="text" name="title" value={this.state.title} onChange={this.handlePostChange}></input>
                            <br />
                            <label> Comment:</label>
                            <br />
                            <textarea className="InputField" type="text" name="content" value={this.state.content} onChange={this.handlePostChange} placeholder="I'm so excited!!"></textarea>
                            <br />
                            <button type="submit" >Submit</button>
                        </div>
                    </form>



                </Row>
            </Container>
        );
    }
}

export default EventForumSingle;