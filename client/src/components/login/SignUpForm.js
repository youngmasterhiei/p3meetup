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
        <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
            <div className="small-dialog-header">
                <h3>Sign In</h3>
            </div>
            <form>
                <div className="sign-in-wrapper">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"  required name="email" id="email" />
                        <i className="icon_mail_alt" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"  required id="password" defaultValue />
                        <i className="icon_lock_alt" />
                    </div>
                    <div className="clearfix add_bottom_15">
                        <div className="checkboxes float-left">
                            <label className="container_check">Remember me
                                <input type="checkbox" />
                                <span className="checkmark" />
                            </label>
                        </div>
                        <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                    </div>
                    <div className="text-center"><input type="submit" defaultValue="Log In" className="btn_1 full-width" /></div>
                    <div className="text-center">
                        Don’t have an account? <a href="#0">Sign up</a>
                    </div>
                    <div id="forgot_pw">
                        <div className="form-group">
                            <label>Please confirm login email below</label>
                            <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                            <i className="icon_mail_alt" />
                        </div>
                        <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                        <div className="text-center"><input type="submit" defaultValue="Reset Password" className="btn_1" /></div>
                    </div>
                </div>
            </form>
        </div>




    );
  }
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpForm;