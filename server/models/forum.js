var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Forum = sequelize.define("Forum", {
    title: DataTypes.STRING,
    description: DataTypes.STRING

 
  });
  Forum.associate = function(models) {
    Forum.belongsTo(models.User)
  };
  Forum.associate = function(models) {
    Forum.hasMany(models.Comment);
  }
  Forum.associate = function(models) {
    Forum.hasMany(models.Event);
  }
  return Forum;
};

