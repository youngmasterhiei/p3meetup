import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      verifyPassword: ""
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

export default SignUpForm;