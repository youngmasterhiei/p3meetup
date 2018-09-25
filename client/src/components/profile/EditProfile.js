import React, { Component } from 'react';
import axios from 'axios';
class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        profile: {
          firstName: "",
          lastName: "",
            address: {
                city: "",
                state: ""
            },
            age: "",
            gender: "",
            gitHub: "",
            linkedIn: "",
            // events: {
            //     attended: "",
            //     registered: ""
            // }
        }
    };
 
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    // this.onClick = this.onClick.bind(this);

  }
  //handles input values of form
  handleEventChange = event => {
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  //Form submit and axios post to DB
  handleEventSubmit = event => {
    event.preventDefault();
    
    let profileInfo = {
      firstName: this.state.profile.firstName,
      lastName: this.state.profile.lastName,
      city: this.state.profile.address.city,
      state: this.state.profile.address.state,
      age: this.state.profile.age,
      gender: this.state.profile.gender,
      gitHub: this.state.profile.gitHub,
      linkedIn: this.state.profile.linkedIn

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
          <input className="InputField" type="text" name="firstName" value={this.state.profile.firstName} onChange={this.handleEventChange} placeholder="hello"></input>
          <p />

          <label>Last Name: </label>
          <input className="InputField" type="text" name="lastName" value={this.state.profile.lastName} onChange={this.handleEventChange} placeholder="hello"></input>
          <p />

          <label>City: </label>
          <input className="InputField" type="text" name="city" value={this.state.profile.address.city} onChange={this.handleEventChange} placeholder="hello"></input>
          <p />

          <label>State: </label>
          <input className="InputField" type="text" name="state" value={this.state.profile.address.state} onChange={this.handleEventChange}></input>

          <p />

          <label>Age: </label>
          <input className="InputField" type="text" name="age" value={this.state.profile.age} onChange={this.handleEventChange}></input>

          <p />

          <label>Gender: </label>
          <input className="InputField" type="text" name="gender" value={this.state.profile.gender} onChange={this.handleEventChange}></input>

          <p />

          <label>Github: </label>
          <input className="InputField" type="text" name="gitHub" value={this.state.profile.gitHub} onChange={this.handleEventChange}></input>

          <p />

          <label>LinkedIn: </label>
          <input className="InputField" type="text" name="LinkedIn" value={this.state.profile.linkedIn} onChange={this.handleEventChange}></input>

          <p />

          <button type="submit" >Submit</button>
        </form>
      </div>
      

    );
  }
}

export default EditProfile;