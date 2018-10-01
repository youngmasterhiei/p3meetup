const jwt = require('jsonwebtoken');
const User = require("../models/user.js");
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config/config.json');
var db = require("../models");
// const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
// const bcrypt = require("bcrypt-nodejs");
var userPass = "";


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

      // if (!User) {
      //   const error = new Error('Incorrect email or password');
      //   error.name = 'IncorrectCredentialsError';
      //   console.log("no user")


      //   return done(error);
      // }


     return db.User.build().validatePass(dataPass, (err, result)=>{
       console.log(err);
       console.log(result);
       if(result== true){
          console.log("hello");
       }
       else if (!result){
         console.log("asdfasdf")

       }
     
        // if (result == true) {
        //   console.log(err)
        // } else {
        //   console.log(result)
        // }
        // User.prototype.bcrypt.compare(User.password, this.password, function(err, res) {
        //   if(res) {
        //    // Passwords match
        //   } else {
        //    // Passwords don't match
        //   } 
        // });













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
});

  // find a user by email address


    // check if a hashed user's password is equal to a value saved in the database


