var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
 
  });
  Comment.associate = function(models) {
    Comment.belongsTo(models.Events)
  };
  Comment.associate = function(models) {
    Comment.belongsTo(models.User);
  }
  return Comment;
};

