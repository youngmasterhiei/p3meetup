import React, { Component } from 'react';
import axios from "axios";
import "../../styles.scss"
class HeroSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userSearch: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    //handles input values of form


    handleChange = event => {
        this.setState({
            userSearch: event.target.value

        });
    }


    handleSubmit = event => {
        event.preventDefault();
        let search = this.state.userSearch
        console.log(search);
        axios.get("api/events/" + search)
            .then(res => {
                console.log(res.data);

            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <div className="">
                        <h1>Awesome Picture</h1>
                        <br />

                        <p>And I'm a Photographer</p>
                        <br />

                        <input className="InputField" type="text" name="event" value={this.state.event} onChange={this.handleChange}></input>
                        <button onClick={this.handleSubmit}>Search Event</button>
                    </div>
                </div>
            </div>


        );
    }
}

export default HeroSearch;