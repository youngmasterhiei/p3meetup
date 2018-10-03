import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
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
      email: this.state.email,
      userPassword: this.state.password
    };
    console.log(userInfo.email);
    console.log(userInfo.userPassword);
    axios.get("api/User/" + userInfo.email)
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
      <div className="base-login-form">

          <div className="login-header">
            <h3 className="base-heading-md">Login</h3>
          </div>

          <div className="form-container">

            <form onSubmit={this.handleSubmit}>

             <label>Username: </label>
             <input className="InputField" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          <p />


          <label>Password: </label>
          <input className="InputField" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

          <p />

          <button type="submit" >Submit</button>
        </form>
      </div>
      </div>

    );
  }
}

export default LoginForm;