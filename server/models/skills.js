var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Skill = sequelize.define("Skill", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
 
  });
  Skill.associate = function(models) {
    Skill.belongsTo(models.User)
  };
  //future use 
  
  // Skill.associate = function(models) {
  //   Skill.hasOne(models.Assessment);
  // }
  return Skill;
};

