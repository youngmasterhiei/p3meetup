const jwt = require('jsonwebtoken');
const User = require("../models/user.js");
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config/config.json');
var db = require("../models");
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
var userPass ="";


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
   const userData = {
    email: email.trim(),
    password: password.trim()
  };

  return db.User.findOne(
    {
      where: { email: userData.email }
    })
    .then(function (User) {
      console.log(userData.password + " " + userData.email);
      userPass = userData.password;
      console.log(User.dataValues.password);
      dataPass = User.dataValues.password;

      if (!User) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';
        console.log("no user")


        return done(error);
      }



   




      var isValidPassword = function(userPass, password){
        return bcrypt.compareSync(userPass, password);
      }
        if (!isValidPassword(userPass, password)) {
          console.log("check hash")
          const error = new Error('Incorrect email or password');
          error.name = 'IncorrectCredentialsError';


          return done(error);
        }
        if (isMatch){
          console.log("match!")
        }

        const payload = {
          sub: User._id
        };

        // create a token string
        const token = jwt.sign(payload, config.jwtSecret);
        const data = {
          name: User.name
        };

        return done(null, token, data);
      });
    });


  // find a user by email address


    // check if a hashed user's password is equal to a value saved in the database


