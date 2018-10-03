import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import axios from 'axios';
// import Auth from '../modules/Auth';


class SignUpForm extends Component {
  constructor(props) {
    super(props, );

 

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  handleSubmit = event => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    // const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
console.log(email + password);
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        // redirect user after sign up to login page
        this.props.history.push('/login');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }



  render() {
    return (
      <div className="user-login">
      <h1>SignUp</h1>

        <form onSubmit={this.handleSubmit}>

          <label>Email: </label>
          <input className="InputField" type="email" name="email" value={this.state.user.email} onChange={this.handleChange}></input>
          <p />


          <label>Password: </label>
          <input className="InputField" type="password" name="password" value={this.state.user.password} onChange={this.handleChange}></input>

          <p />


          <label>Verify Password: </label>
          <input type="password" name="verifyPassword" value={this.state.verifyPassword} onChange={this.handleChange}></input>
          <p />

          <button type="submit" >Submit</button>
        </form>
      </div>

    );
  }
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpForm;