import React, { Component } from 'react';
import axios from "axios";
import { Container, Row, Col, Table, TableBody, TableHead } from 'mdbreact';
import EventDiscussionBox from "./EventDiscussionBox";


class EventForumSingle extends Component {


    constructor(props) {
        super(props);

        this.state = {
            event: {
      
              comments: "",
              prevComments: []
             
      
      
      
            },
            event_id: localStorage.getItem("event_id")
      
          };
        // this.handleChange = this.handleChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }



    handleCommentChange = event => {
        this.setState({
          [event.target.name]: event.target.value
    
        });
      }

      handleCommentSubmit = event => {
        event.preventDefault();
    
        let comment =  this.state.comments
 
        console.log(comment);
   
      };

      componentDidMount() {
        let id= this.state.id

        axios.get("/auth/api/posts/" +id)
            .then(res => {
                console.log(res.data[0]);
                this.setState({
                    event: {
              
                      comments: res.data,
                     
              
              
              
                    }
              
                  });
                console.log(this.state.comments + "fuck me")
            })
        

    }


    render() {
        return (
            <Container style={{ maxWidth: '80%' }}>
                <Row>
                    <h1> Comments</h1>
                </Row>
                <Row>


                    <Row>
                    <ul>
                    {this.state.event.comments.map((comments) => {
                            return <EventDiscussionBox comments={comments} key={comments.id}
                            />
                        })
              
                        }
                    </ul>
                    </Row>
                        <form onSubmit={this.handleCommentSubmit} >
                            <h1>Create an Comment</h1>
                            <label>Title: </label>
                            <textarea className="InputField" type="text"  name="userComment" value={this.state.userComment} onChange={this.handleCommentChange} placeholder="I'm so excited!!"></textarea>


                            <button type="submit" >Submit</button>
                        </form>



                </Row>
            </Container>
        );
    }
}

export default EventForumSingle;