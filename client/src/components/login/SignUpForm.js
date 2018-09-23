import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value

    });
    console.log("hello");

  }
  handleSubmit = event => {
    event.preventDefault();
let userInfo = {
     userEmail : this.state.email,
     userPassword : this.state.password
};
    console.log(userInfo.userEmail);
    console.log(userInfo.userPassword);
    axios({
      method: 'post',
      url: '/api/user',
      data: userInfo,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
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
      <h1>SignUp</h1>

        <form onSubmit={this.handleSubmit}>

          <label>Signup: </label>
          <input className="InputField" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="hello"></input>
          <p />


          <label>Password: </label>
          <input className="InputField" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

          <p />


          <label>Verify Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <p />

          <button type="submit" >Submit</button>
        </form>
      </div>

    );
  }
}

export default SignUpForm;