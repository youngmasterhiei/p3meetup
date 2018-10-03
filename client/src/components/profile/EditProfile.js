import React, { Component } from 'react';
import axios from 'axios';


class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

      profile: {
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        age: "",
        gender: "",
        gitHub: "",
        linkedIn: ""
        // events: {
        //     attended: "",
        //     registered: ""
        // }
      },
      id: localStorage.getItem('token')
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    // this.onClick = this.onClick.bind(this);

  }
  //handles input values of form
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  //Form submit and axios post to DB
  handleEventSubmit = event => {
    event.preventDefault();

    let profileInfo = {
      // firstName: this.state.firstName,
      // lastName: this.state.lastName,
      city: this.state.city,
      state: this.state.state,
      age: this.state.age,
      gender: this.state.gender,
      gitHub: this.state.gitHub,
      linkedIn: this.state.linkedIn

    };
    console.log(profileInfo);
    axios({
      method: 'post',
      url: '/api/profile',
      data: profileInfo,
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
    // this.props.toggleList();
    // this.onClick();
  };

  // onClick() {
  //   const { updateEventList } = this.props

  //   updateEventList();
  // }

  render() {

    return (
      <div className="">

        <form onSubmit={this.handleEventSubmit} >
          <h1>Edit Profile</h1>
          <label>First Name: </label>
          <input className="InputField" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
          <p />

          <label>Last Name: </label>
          <input className="InputField" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
          <p />

          <label>City: </label>
          <input className="InputField" type="text" name="city" value={this.state.city} onChange={this.handleChange}></input>
          <p />

          <label>State: </label>
          <input className="InputField" type="text" name="state" value={this.state.state} onChange={this.handleChange}></input>

          <p />

          <label>Age: </label>
          <input className="InputField" type="text" name="age" value={this.state.age} onChange={this.handleChange}></input>

          <p />

          <label>Gender: </label>
          <input className="InputField" type="text" name="gender" value={this.state.gender} onChange={this.handleChange}></input>

          <p />

          <label>Github: </label>
          <input className="InputField" type="text" name="gitHub" value={this.state.gitHub} onChange={this.handleChange}></input>

          <p />

          <label>LinkedIn: </label>
          <input className="InputField" type="text" name="linkedIn" value={this.state.linkedIn} onChange={this.handleChange}></input>

          <p />

          <button type="submit" >Submit</button>
        </form>
      </div>


    );
  }
}

export default EditProfile;