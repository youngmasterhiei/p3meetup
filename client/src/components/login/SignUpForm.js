import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';


// import axios from 'axios';
// import Auth from '../modules/Auth';


class SignUpForm extends Component {
  constructor(props) {
    super(props, );

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
        password: '',
        username: '',
        fname: '',
        lname: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  handleRegisterSubmit = event => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    // const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const username = encodeURIComponent(this.state.user.username);
    const fname = encodeURIComponent(this.state.user.fname);
    const lname = encodeURIComponent(this.state.user.lname);
    const formData = `email=${email}&password=${password}&username=${username}&fname=${fname}&lname=${lname}`;
    console.log(formData);
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
        // this.props.history.push('/login');
      } else {
        // failure

        // const errors = xhr.response.errors ? xhr.response.errors : {};
        // errors.summary = xhr.response.message;

        this.setState({
          // errors
        });
      }
    });
    xhr.send(formData);
  };


  handleLoginSubmit = event => {
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


      //       <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
      //         <div className="small-dialog-header">
      //         <h3>Register</h3>
      //         </div>
      //         <form onSubmit={this.handleSubmit}>
      // <div className="sign-in-wrapper">
      //         <div className="form-group">
      //         <label>Email</label>
      //         <input type="email" className="form-control" name="email" value={this.state.user.email} onChange={this.handleChange} required  id="email" />
      //         <i className="icon_mail_alt" />
      //         </div>
      //         <div className="form-group">
      //         <label>Password</label>
      //         <input type="password" className="form-control" name="password" value={this.state.user.password} onChange={this.handleChange} required id="password" defaultValue />
      //     <i className="icon_lock_alt" />
      //         </div>
      //         <div className="form-group">
      //         <label>Confirm Password</label>
      //     <input type="password" className="form-control" name="verifyPassword" value={this.state.user.password} onChange={this.handleChange} required id="password" defaultValue />
      //     <i className="icon_lock_alt" />
      //         </div>
      //         <div className="clearfix add_bottom_15">
      //         <div className="checkboxes float-left">
      //         <label className="container_check">Remember me
      //     <input type="checkbox" />
      //         <span className="checkmark" />
      //         </label>
      //         </div>
      //         <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
      //     </div>
      //     <div className="text-center"><input type="submit" defaultValue="Log In" className="btn_1 full-width" /></div>
      //         <div className="text-center">
      //         Don’t have an account? <a id="l" href="#0">Login</a>
      //         </div>
      //         <div id="forgot_pw">
      //         <div className="form-group">
      //         <label>Please confirm login email below</label>
      //     <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
      //         <i className="icon_mail_alt" />
      //         </div>
      //         <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
      //     <div className="text-center"><input type="submit" defaultValue="Reset Password" className="btn_1" /></div>
      //         </div>
      //         </div>
      //         </form>
      //         </div>
      <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="row sign-in-container">
          <div className="col-md-12">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#" className="active" id="login-form-link">Login</a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" id="register-form-link">Register</a>
                  </div>
                </div>
                <hr />
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    <form id="login-form" onSubmit={this.handleLoginSubmit}>
                      <div className="form-group">
                        <input type="text" name="email" value={this.state.user.email} onChange={this.handleChange} id="username" tabIndex={1} className="form-control" placeholder="Username" />
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" value={this.state.user.password} onChange={this.handleChange} id="password" tabIndex={2} className="form-control" placeholder="Password" />
                      </div>
                      <div className="form-group text-center">
                        <input type="checkbox" tabIndex={3} className name="remember" id="remember" />
                        <label htmlFor="remember"> Remember Me</label>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-12">
                            <input type="submit" name="login-submit" id="login-submit" tabIndex={4} className="form-control btn btn-login" defaultValue="Log In" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="text-center">
                              <a href="#0" tabIndex={5} className="forgot-password">Forgot Password?</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>


                    <form onSubmit={this.handleRegisterSubmit} id="register-form" role="form" style={{ display: 'none' }}>


                      <div className="form-group">
                        <input type="email" name="email" id="email" value={this.state.user.email} onChange={this.handleChange} tabIndex={1} className="form-control" placeholder="Email Address" />
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" id="password" value={this.state.user.password} onChange={this.handleChange} tabIndex={2} className="form-control" placeholder="Password" />
                      </div>
                      <div className="form-group">
                        <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="username" id="username" value={this.state.user.username} onChange={this.handleChange} tabIndex={1} className="form-control" placeholder="Username" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="fname" id="fname" value={this.state.user.fname} onChange={this.handleChange} tabIndex={1} className="form-control" placeholder="First Name" />
                      </div>
                      <div className="form-group">
                      <input type="text" name="lname" id="lname" value={this.state.user.lname} onChange={this.handleChange} tabIndex={1} className="form-control" placeholder="Last Name" />
                    </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-12">
                            <input type="submit" name="register-submit" id="register-submit" className="form-control btn btn-register" defaultValue="Register Now" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>










    );
  }
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpForm;