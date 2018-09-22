module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      
    });
    Profile.associate = function(models) {
      Profile.belongsTo(models.User)
    };
    
    return Profile;
  };
  