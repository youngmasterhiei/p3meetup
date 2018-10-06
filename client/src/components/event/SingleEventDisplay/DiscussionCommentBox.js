
import React, { Component } from 'react';
import axios from "axios";


class CommentDropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // onSubmit={this.handlePostSubmit}

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.checkProps = this.checkProps.bind(this);

    }

    handlePostChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }




    handleCommentChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handleCommentSubmit = event => {
        event.preventDefault();


        let commentInfo = {

            event_id: this.state.event_id,
            post_id: this.state.title,
            content: this.state.content,
            user_id: this.state.user_id


        };
        let id = this.state.event_id;
        console.log(commentInfo);
        axios({
            method: 'post',
            url: '/auth/api/post/' + id,
            data: commentInfo,
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

    checkProps(event){
        event.preventDefault();
        console.log(this.props.post_id);
    }


    render() {


        return (
            <div className="dropdown">
                <form  >
                    <div className="form-group text-center">



                        <label> Comment:</label>
                        <br />
                        <textarea className="discussionCommentTextarea" type="text" name="content" value={this.state.comment} onChange={this.handleCommentChange} placeholder="What are your thoughts?!"></textarea>
                        <br />
                        <button onClick={this.checkProps} type="submit" >Submit</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default CommentDropDown;

