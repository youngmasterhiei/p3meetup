const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
var db = require("../models");


module.exports = function(sequelize, DataTypes) 
{
    const user = sequelize.define("user", {
        id:
        {
            //there may be an issue if the column is not CHAR (36)
            //when testing need to see what datatype sequelize actually assigns
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:true
        },
        fname:
        {
            type: DataTypes.TEXT,
            allowNull: true,
            
            validate: 
            {
                len: [1,50]
            }
        },
        lname:
        {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: 
            {
                len: [1,50]
            } 
        },
        username:
        {
            type: DataTypes.TEXT,
            allowNull: true,
            
            validate: 
            {
                len: [1,50]
            }
        },
        email:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            notEmpty: true,
            validate:
            {
                isEmail: true
            }
        },
        password: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
    },
        
    
 
{
 hooks: {
   beforeCreate: (user) => {
     const salt = bcrypt.genSaltSync();
     user.password = bcrypt.hashSync(user.password, salt);
   }
}
 })
 
 user.prototype.validatePass = function (userPass, enteredPass, callback) {
   console.log("fuck");
   console.log(userPass + "<db password   usermodel   user entered pass>" + enteredPass);

    return bcrypt.compare(userPass, enteredPass, callback);

 };
 




return user
}