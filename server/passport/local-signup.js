const User = require("../models/user.js");
const PassportLocalStrategy = require('passport-local').Strategy;
var db = require("../models");

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  console.log("hello from passlocal")
  console.log(email+ "hello world")


  const userData = {
    email: email,
    password: password,
  };

  db.User.create(
    {
    // fname: req.body.fname,
    // lname: req.body.lname,
    email: req.body.email,
    password: req.body.password
    });
  
});




