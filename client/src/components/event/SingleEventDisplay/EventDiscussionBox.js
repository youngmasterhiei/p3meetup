import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'mdbreact';
import CommentDropdown from './CommentDropdown';

class EventDiscussionBox extends Component {
    constructor(props) {
        super(props);

        this.state = {


        };

        this.findUser = this.findUser.bind(this);
        this.getUserId = this.getUserId.bind(this);



    }
    // shouldComponentUpdate(newProps) {
    //    
    //   }
    findUser(userId) {

        axios.get("/auth/api/user/" + this.props.getPost.user_id)
            .then(res => {
                console.log(res.data);
                this.setState({

                    user: res.data

                });
                console.log(res.data)
            })

    };

    // replyToPost() {
    //  console.log("hello world and i like cheese")

    // };

    getUserId(id) {

        localStorage.setItem("profileId", id)
        console.log(id);
    };
    //   {this.props.getPost.poster_user_id}

    render() {


        // {this.state.getPost.map((getPost) => {
        //     return <EventDiscussionBox getPost={getPost} key={getPost.user_id}
        //     />
        // })

        // }



        return (
            <Container>

                {this.props.getPost.posts.map(post => {
                    return <ul>

                        <li><a value={this.props.getPost.user_id} onClick={() => this.getUserId(this.props.getPost.id)} href={"profile/user"}>{this.props.getPost.fname} {this.props.getPost.lname}</a> : {post.content} <CommentDropdown post_id = {post.id} />
                        </li>
                    </ul>

                })}

            </Container>


        );
    }
}

export default EventDiscussionBox;