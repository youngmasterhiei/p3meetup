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
      beforeCreate: (User) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(User.password.plaintext, salt);
      }
    },
      
    })
    
    User.prototype.validatePass = function (password, callback) {
      console.log("fuck");

       return bcrypt.compareSync(password, this.password, callback);

    };
    
 

  User.associate = function (models) {
  }

  return User
}