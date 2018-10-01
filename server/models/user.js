const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
var db = require("../models");




module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING
      
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
      
    })
    
    User.prototype.validatePass = function (userPass, enteredPass, callback) {
      console.log("fuck");
      console.log(userPass + "   usermodel   " + enteredPass);
      console.log(User.password);

       return bcrypt.compare(userPass, enteredPass, callback);

    };
    
 

  User.associate = function (models) {
  }

  return User
}