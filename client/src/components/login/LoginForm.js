import React, { Component } from 'react';
import Auth from '../modules/Auth';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange = event => {
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
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);
        console.log(xhr.response.token);

        // update authenticated state
        this.props.toggleAuthenticateStatus()

        // redirect signed in user to dashboard
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  };




  render() {
    return (


      <div className="base-login-form" id="sign-in-dialog">

          <div className="login-header">
            <h3 className="base-heading-md">Login</h3>
          </div>

          <div className="form-container">

            <form onSubmit={this.handleSubmit}>

             <label>Username: </label>
             <input className="InputField" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>

          <label>Username: </label>
          <input className="InputField" type="email" name="email" value={this.state.user.email} onChange={this.handleChange}></input>
          <p />


          <label>Password: </label>
          <input className="InputField" type="password" name="password" value={this.state.user.password} onChange={this.handleChange}></input>

          <p />

          <button type="submit" >Submit</button>
        </form>
      </div>
      </div>

    );
  }
}

export default LoginForm;